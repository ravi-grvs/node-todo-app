const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
    if(err){
        return console.log(err);
    }
    console.log('success')
    
    db.collection('Users').findOneAndUpdate({ _id: new ObjectID("59f3974db16082578485d640")}
    ,{
          $inc:{
              age : 2
          }
      },{
          returnOriginal : false
      }
    ).then((result)=>{
        console.log(result);
    })
})