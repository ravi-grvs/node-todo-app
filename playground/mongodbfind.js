const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('unable to connect to MongoDB');
    }
    console.log('Connection success');
    db.collection('Users').find({location : "India"}).toArray().then((res)=>{
       return console.log(JSON.stringify(res, undefined, 2));
    }).catch((err)=>{
        console.log("err")
    })
});
