const express = require('express');
const app = express()
const cors =require('cors')
const fs = require('fs');
const path =require('path');

//for socket
var http = require('http').createServer(app);


//for CORS either use broser extension or this middleware
//it will allows from all the clients
//app.use(cors());
// Settings for CORS

app.use(cors());
 
// app.use(function (req, res, next) {
// res.header('Access-Control-Allow-Origin', req.headers.origin);
// res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
// res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Final-Length, Offset, Content-Range, Content-Disposition');
// res.header('Access-Control-Allow-Credentials', 'false');
// console.log(res.header);
// if (req.method == 'OPTIONS') {
// res.send(200);
// } else {
// next();
// }
// }); 
 

// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.header('Access-Control-Allow-Origin', 'http://52.66.252.216:3001/');

//     // Request methods you wish to allow
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });

app.get('/api/users',(req,res)=>{
    res.send([
        {
            name:"Pragati"
            
        },
        {
            name:"Gaurav"
        }
    ]
    ) 
   // res.sendFile(path.join(__dirname, '../server/public', 'file.js'));
})

app.get('/api/expenditure',(req,res)=>{
    res.sendFile(path.join(__dirname, '../server/public/JSON', 'expenditure.json'));
})

app.get('/api/income',(req,res)=>{
    res.sendFile(path.join(__dirname, '../server/public/JSON', 'income.json'));
})

app.get('/api/locality',(req,res)=>{
    res.sendFile(path.join(__dirname, '../server/public/JSON', 'locality.json'));
})

app.get('/api/pincode',(req,res)=>{
    res.sendFile(path.join(__dirname, '../server/public/JSON', 'pincode.json'));
})

app.get('/api/geoJson',(req,res)=>{
    res.sendFile(path.join(__dirname, '../server/public/JSON', 'geoJson.json'));
})

app.get('/split/name', (req, res) => {
    let firstname=req.query.fullName.split(' ')[0];
    let lastName=req.query.fullName.split(' ')[1];
    let obj={
        'firstName':firstname,
        'lastName':lastName
    };
    res.send(obj);
        
    });// end split name
    
    app.get('/calculate/age', (req, res) => {
        var d = new Date();
        var n = d.getFullYear();
    let age=n-req.query.dob.split('-')[0]-1;
        res.send({'age':age});
    });// end calculate age


//http = app.listen(3000);

http.listen(3000, () => {
  console.log('listening on *:3000');
});

const io = require('socket.io')(http);
// io.origins('http://localhost:4200/') ;
// io.origins((origin, callback) => {
//     if (origin !== 'http://localhost:4200/') {
//       return callback('origin not allowed', false);
//     }
//     callback(null, true);
//   });
  io.on('connection', (socket) => {
    console.log('a user connected');
    // socket.on('disconnect', () => {
    //   console.log('user disconnected');
    // });
    socket.on('my message', (msg) => {
      console.log('message: ' + msg);
    });
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
  });



// app.listen(3000,()=>{
//     console.log('server listening on port 3000')
// });