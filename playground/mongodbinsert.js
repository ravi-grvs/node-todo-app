const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/test',
function(err, db){
    if(err){
        return console.log(err)
    }
    console.log('Success');
    var collection = db.collection('family');
    collection.insertMany([{
        name :"Gokari",
        age : 50,
        role :"father",
        location : "India"
    }, {
        name :"Ramulamma",
        age :48,
        role :"mother",
        location : "India" 
    }]).then((result)=>{
       console.log(result)
        })
    })
})



















// // in mongodb module mongoclient function/method lets you connect to database
// const MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
//     if(err){
//         return console.log('unable to connect to MongoDB');
//     }
//     console.log('Success');
//     db.collection('Users').insertOne({
//         name : "Ravi Kumar",
//         age : 25,
//         location : "Irving Tx, 75063"
//     }, (err, res)=>{
//         if(err){
//             return console.log('unable to insert');
//         }
//         console.log(JSON.stringify(res.ops, undefined, 2));
//     });
//     db.close();
// });









