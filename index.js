import {MongoClient} from 'mongodb';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Form from '../components/Form';
import ListOfTodo from '../components/ListOfTodo';

const DUMMY_TODOS = [
  {
    id : 't1',
    name : 'GYM',
    description : 'must go gym'
  }
]
export default function Home(props) {
  return (
    <div className={styles.container}>
      <h1>Welcome to Todo</h1>
      <Form/>
      <ListOfTodo dummyData={props.dummyData}/>
    </div>
  )
}

export async function getStaticProps(){


        const client = await MongoClient.connect(  "mongodb+srv://afridmd001:mongodbUser2000@cluster0.rjwist1.mongodb.net/Todos?retryWrites=true&w=majority");

        const dataBase =  client.db();
        
        const todosCollections = dataBase.collection('Todos');

        const Todos = await todosCollections.find().toArray();

        client.close();
  return{
    props :{
      dummyData : Todos.map((todo) => ({
          id : todo._id.toString(),
          name : todo.name,
          description: todo.description,

      }))
    },
    revalidate : 1
  }
}