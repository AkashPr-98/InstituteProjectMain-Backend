
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require("http");
const data = require("./app");
const server = http.createServer(data);



var app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());

// error handler


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');


    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// .env filebkp
// API_PORT  = 8080
// MONGO_URI = 'mongodb+srv://SumagoInfo:Sumago123@cluster0.4jvvtzl.mongodb.net/msins?retryWrites=true&w=majority'


const PORT = process.env.PORT || 8080;
 
//server

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

// function initial() {
//     Role.estimatedDocumentCount((err, count) => {
//       if (!err && count === 0) {
//         new Role({
//           name: "user"
//         }).save(err => {
//           if (err) {
//             console.log("error", err);
//           }
  
//           console.log("added 'user' to roles collection");
//         });
  
//         new Role({
//           name: "moderator"
//         }).save(err => {
//           if (err) {
//             console.log("error", err);
//           }
  
//           console.log("added 'moderator' to roles collection");
//         });
  
//         new Role({
//           name: "admin"
//         }).save(err => {
//           if (err) {
//             console.log("error", err);
//           }
  
//           console.log("added 'admin' to roles collection");
//         });
//       }
//     });
//   }