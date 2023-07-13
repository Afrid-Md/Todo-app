"use client";
import { Fragment} from "react";
import styles from "./HomePage.module.css";
import Navbar from './Navbar/navbar';;
import NewTodo from "./Add form/new-todo";
import TodoList from "./todo list/TodoList";


export default function Home() {


  return (
    <Fragment>
      <Navbar />
      <div className={styles.bodyInHome}>
        <NewTodo/>
        <TodoList/>
      </div>
    </Fragment>
  );
}
