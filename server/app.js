const express = require('express');
const app = express()
const cors =require('cors')
const fs = require('fs');
const path =require('path');

//for CORS either use broser extension or this middleware
//it will allows from all the clients
app.use(cors());


app.get('/api/users',(req,res)=>{
    res.send([
        {
            myLove:"VARUN (pyar se bolun to V.)",
            hisLove:"tumhari PRAGU"
        }
    ]
    )
   // res.sendFile(path.join(__dirname, '../server/public', 'file.js'));
})
app.listen(3000,()=>{
    console.log('server listening on port 3000')
});