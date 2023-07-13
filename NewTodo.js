import {MongoClient, ObjectId} from 'mongodb';

async function Handler(req, res){

    if(req.method === 'POST'){
        const data = req.body;

        const client = await MongoClient.connect("mongodb+srv://afridmd001:mongodbUser2000@cluster0.rjwist1.mongodb.net/Todos?retryWrites=true&w=majority");

        const dataBase =  client.db();
        
        const todosCollections = dataBase.collection('Todos');

        const result = await todosCollections.insertOne(data);
        console.log(result);

        client.close();

        res.status(201).json({message : 'New Todo added!'});
    }

    if(req.method === 'PUT'){
        const data = req.body.name;
       

        const client = await MongoClient.connect("mongodb+srv://afridmd001:mongodbUser2000@cluster0.rjwist1.mongodb.net/Todos?retryWrites=true&w=majority");

        const dataBase =  client.db();
        
        const todosCollections = dataBase.collection('Todos');

        const result = await todosCollections.updateOne({data}, {$set :{status : 'complete'}});
        console.log(result);

        client.close();

        res.status(201).json({message : 'Todo updated!'});
    }

    if(req.method === 'DELETE'){
        const data =req.body.name;

        const client = await MongoClient.connect("mongodb+srv://afridmd001:mongodbUser2000@cluster0.rjwist1.mongodb.net/Todos?retryWrites=true&w=majority");

        const dataBase =  client.db();
        
        const todosCollections = dataBase.collection('Todos');

        const result = await todosCollections.deleteOne(data);
        console.log(result);

        client.close();

        res.status(201).json({message : 'Todo deleted successfully!'});
    }
}
export default Handler;