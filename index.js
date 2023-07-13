import {MongoClient} from 'mongodb';

function CompletedTasks(props){
    return(
        <ul>
            {props.dummyData.map((todo) =>{
                if(todo.status === 'completed'){
                    return(
                        <li key={todo.id}>
                            <div>
                                <h3>{todo.name}</h3>
                                <p>{todo.description}</p>
                            </div>
                        </li>
                    )
                }
            })}
            
        </ul>
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
      status : todo.status
  }))
},
revalidate : 1
}
}


export default CompletedTasks;