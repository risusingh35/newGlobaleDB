var Evolve=require('./var')
const url=`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.9hybf.mongodb.net/?retryWrites=true&w=majority`
// const client = new Evolve.MongoClient(url);

module.exports={
  connectMongoDB: async function(){
    try {
              Evolve.MongoClient.connect(url, function(err, data) {
                    if (err) {
          MongoClient.close();
          return false
        }else{
                    console.log("Connected to database");
    
             return data
        }})
    } catch (error) {
      console.log('Error in dbConfig',error);
    }
  }
}

// Evolve.dbService={
//     connect:async function (){
//         Evolve.MongoClient.connect(url, function(err, data) {
//                     if (err) {
//           MongoClient.close();
//           return false
//         }else{
//                     console.log("Connected to database");
    
//              return data
//         }
//         }) 
//     }
               
// }
// Evolve.dbService = {    
//      connect: callback => {
//         Evolve.MongoClient.connect(url, function(err, data) {
//         if (err) {
//           MongoClient.close();
//           callback(err);
//         }
//         console.log("Connected to database");
//         Evolve.dbSrv = data;
//         console.log('Evolve.dbSrv:::::::::',Evolve.dbSrv);
//         callback(null);
//         return data
//       });
//     }
//   };
  
 
// 
// mongodb Connection
//  client.connect() .then(
//     client =>
//       client
//         .db('EvolveTestDB')
//         .listCollections()
//         .toArray() // Returns a promise that will resolve to the list of the collections
//   )
//   .then(cols => console.log("Collections", cols))
// //.finally(() => client.close());


