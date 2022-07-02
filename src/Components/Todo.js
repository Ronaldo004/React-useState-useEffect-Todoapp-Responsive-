import React,{useState,useEffect} from 'react'
import "./media.css"
import "./index.css"

const Todo = () => {
  let getitem=()=>{
    let list=localStorage.getItem("todolist");
    if(list){
      return JSON.parse(list);
    }
    else{
      return [];
    }
  }
  
  let [enterData,setEnterdata]=useState("");
  let [item,setItems]=useState(getitem);
  let [editItem,setEdit]=useState(null);
 
  const additem=()=>{
    if(!enterData){
      alert("plz enter value");
    }
    
      
    

    //  setEnterdata([]);
    
    //  setEdit("");
    
  
    // }
  
  
     else{
      const MyInputdataid={
        id :new Date().getTime().toString(),
        name:enterData

      };
            
      setItems([...item,MyInputdataid])
      setEnterdata("");
    
    }
  }
  const dellitem=(index)=>{
    const update_item=item.filter((currelem)=>{
     return currelem.id !==index;

    });
    setItems(update_item);

  }
const dellAll=()=>{
    setItems([])
  }

  const edititem =(id)=>{
   const edititems=item.find((currelem)=>{
    return currelem.id===id;

   })
   
   setEnterdata(edititems.name);
   setEdit(id);
  }
  useEffect(()=>{
  localStorage.setItem("todolist",JSON.stringify(item));
  },[item])
  const edit_item=()=>{ setItems(
    item.map((currelem)=>{
      if (currelem.id === editItem) {
        return { ...currelem, name: enterData }
    }
    return currelem;
   

    })
    );
  }
    
  
  return (
    <>
    <div className='Main'>
      <div className='childMain'>
      <h2>TODO</h2>
      <img src="./logo and img/logo.png" alt="Image" className='Logo'></img>
      <figure>
       <p className='para'> Add list here ✌</p>
        <div className='Additem'>
          <input type="text" placeholder='Write here..✍' className='formControl' value={enterData}
          onChange={(event)=>setEnterdata(event.target.value)}></input>
            <i className='fas fa-plus add-btn'title='add-btn' onClick={additem}></i>
          <i className='fas fa-edit add-btn' title='edit-btn' onClick={edit_item}></i>
        
          
        </div>
      </figure>
      </div>

      {/* //edit */}

     <div className='showItem'>
      {item.map((currelem)=>{
        return(
          <div className='eachItem' key={currelem.id}>
        <h3>{currelem.name}</h3>
        <div className='todo-btn'>
          <i className='far fa-edit adde-btn' onClick={()=>edititem(currelem.id)}></i>
          <i className='far fa-trash-alt adde-btn' onClick={()=>dellitem(currelem.id)}></i>

        </div>
      </div>

        )

      })}
      

     </div>

      
      
      {/* dell */}
      <div className='Delall'>
        <button className='Dell-btn' onClick={dellAll}>Delete All</button>
      </div>
    </div>
    </>
  )
}

export default Todo;