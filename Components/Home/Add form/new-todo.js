'use client';
import { useRef } from "react";
import styles from "./new-todo.module.css";

function NewTodo(props) {

  const taskName = useRef();
  const description = useRef();
  
  const submitHandler = (e) =>{
    e.preventDefault();
    
    const newTodo ={
      id : Math.random(),
      taskName: taskName.current.value,
      description : description.current.value
    }

    console.log(newTodo);
  }

  return (
    <form className={styles.addForm} onSubmit={submitHandler}>
      <input type="text" placeholder="Task name" className={styles.input} ref={taskName} />
      <input type="text" placeholder="description" className={styles.input} ref={description}/>
      <div className={styles.buttonsSpan}>
        <span  className={styles.buttonSpan}>
          <button className={styles.addButton} type="submit">Add</button>
        </span>
      </div>
    </form>
  );
}
export default NewTodo;
