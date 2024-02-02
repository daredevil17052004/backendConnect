const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.header({"Access-Control-Allow-Origin":"*"})
    res.json({"mes":"hidshbfdsibefei"})
})

app.listen(4000,(err)=>{
    if(err){
        return console.log('Could not listen');
    }
    console.log('Listening');
})