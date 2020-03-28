const express = require('express');
const app = express()
const cors =require('cors')

//for CORS either use broser extension or this middleware
//it will allows from all the clients
app.use(cors());


app.get('/api/users',(req,res)=>{
    res.send([
        {
            name:"Pragati"
        },{
            name:"Gaurav"
        }
    ]
    )
})
app.listen(3000,()=>{
    console.log('server listening on port 3000')
});