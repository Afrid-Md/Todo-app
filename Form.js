'use client';
import React,{useRef} from 'react'

function Form() {
    const nameRef = useRef();
    const desRef = useRef();

    const submitHandler =async(e) =>{
        e.preventDefault();
        
        const newTask = {
            name : nameRef.current.value,
            description : desRef.current.value,
            status : 'incomplete'
        }
        console.log(newTask);

        try{
            const response = await fetch('/api/NewTodo',{
                method:'POST',
                body : JSON.stringify(newTask),
                headers : {
                    'Content-Type' : 'application/json'
                }
            });

            const data = await response.json();

            if(response.ok){
                console.log(data);
            }
        }catch(error){
            alert('something went wrong');
        }
    }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Task name</label>
        <input type='text' ref={nameRef}/>
        <label>Description</label>
        <input type='text' ref={desRef}/>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Form
