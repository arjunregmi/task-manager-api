//  const mongodb=require('mongodb')
//  const MongoClient=mongodb.MongoClient
// const ObjectID=mongodb.ObjectID

//shorthend code of above
const {MongoClient, ObjectID}=require('mongodb') 

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'


MongoClient.connect(connectionURL,{useUnifiedTopology:true},(error,client)=>{
    if(error){
        return console.log("Unable to connect database")
    }
    console.log("Database connected successfully");

    const db=client.db(databaseName)


    db.collection('users').insertOne({
         name:'Arjun',
        age:20 
    }).then((result)=>{
        console.log(result)
    }).catch(()=>{
        console.log(error)
    })

})
