import React from "react";

function ListOfTodo(props) {

  const markasDone=async(name)=>{
    try{
      const response = await fetch("/api/NewTodo",{
        method:'PUT',
        body : JSON.stringify(name),
        headers : {
          'Content-Type' : 'application/json'
        }
      })

      const data = await response.json();

      if(response.ok){
        console.log(data);
      }
    }catch(error){
      alert('something went wrong!');
    }
    
  }

  const deleteTodo=async(name)=>{
    try{
      const response = await fetch("/api/NewTodo",{
        method:'DELETE',
        body : JSON.stringify(name),
        headers : {
          'Content-Type' : 'application/json'
        }
      })

      const data = await response.json();

      if(response.ok){
        console.log(data);
      }
    }catch(error){
      alert('something went wrong!');
    }
    
  }

  return (
    <div>
      <ul>
        {props.dummyData.map((todo) =>
            {
              if(todo.status === 'incomplete'){
                return(
              <li
                key={todo.id}
                style={{ display: "flex", alignItems: "center" }}
              >
                <div>
                  <h3>{todo.name}</h3>
                  <p>{todo.description}</p>
                </div>
                <button onClick={()=>markasDone(todo.name)}>Mark as done</button>
                <button onClick={()=>deleteTodo(todo.name)}>Delete</button>
              </li>)
              }
            }
        )}
      </ul>
    </div>
  );
}

export default ListOfTodo;
