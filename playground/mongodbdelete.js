const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log("Unable to connect to MongoDB");
    }
    console.log('Success');
    // deleteMany 
    db.collection('Todos').deleteMany({text:"watch movie"}).then((res)=>{
        console.log(res);
    }, (err)=>{
        console.log(err);
    });
    //deleteOne
    db.collection('Todos').deleteOne({text : "Listen to songs"}).then((res)=>{
        console.log(res);
    }, (err)=>{
        console.log(err);
    })
    // findOneAndDelete

    db.collection('Users').findOneAndDelete({_id : new ObjectId("59f3974db16082578485d640")}).then((res)=>{
        console.log(res)
    }, (err)=>{
        console.log(err)
    })

})