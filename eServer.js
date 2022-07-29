// Boot/Server.js
var express=require('express')
var mongoose = require('mongoose');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient
require('dotenv').config()

var Evolve = new require('./var');

Evolve.express = express;
Evolve.Mongoose = mongoose;
Evolve.MongoClient = MongoClient;

(async function (){
  try {
    // let dbConn=
    // await require('./dbConfig').connectMongoDB().then(data=>{
    //   console.log('data::::::::::::',data);
    // })
    let log = require('./dbConfig');
    let chotaLog = await log.connectMongoDB()
    console.log("logloglog" , chotaLog);
    console.log('DB Connected');
    
      } catch (error) {
    console.log('Error in Connecting MONGODB',error);
  }
})()
// async function dbConnect(){
//             try {    
//                require('./dbConfig')
//                  let dbData= await Evolve.dbService.connect(err => {
//             if (err) {
//               console.log("Error: ", err);
//               process.exit(1);
//             }
//         })
//         return dbData
//     } catch (error) {
//         console.log("Error In eServer:::::::::::::::::::::",error);
//                         }
//     }
//     dbConnect().then(err=>{
//         console.log('err:::::::::::::::::::',err);
//     })

// (async function (){
//     try {
//         const db=require('./dbConfig')

//         Evolve.dbService.connect(err => {
//             if (err) {
//               console.log("Error: ", err);
//               process.exit(1);
//             }})
//          } catch (error) {
//         console.log("Error In eServer:::::::::::::::::::::",error);
//     }
  
// })()



module.exports = Evolve = Evolve;