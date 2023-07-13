import React from "react";

const dummyData =[
  {
    id : 'm1',
    taskname : 'Gym',
    description : 'must go gym'
  }
]

function TodoList(props) {
  

  return (
    <ul>
      {dummyData.map
      ((todo) => 
         (
          <li key={todo.id}>
            <h3>{todo.taskname}</h3>
            <p>{todo.description}</p>
          </li>
        )
      )}
    </ul>
  );
}

export default TodoList;
