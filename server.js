const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 8080;
const HOST ='0.0.0.0'

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res,next) => {
    res.append("Access-Control-Allow-Origin" , "*");
    res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.append("Access-Control-Allow-Headers", "Origin, Accept,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.append("Access-Control-Allow-Credentials", true);
    next();
});


app.get('/',(req,res)=> {
    res.send('<h1 style="text-align:center"> Hello Version 1 </h1>')
})
app.get('/test',(req,res)=>{
    res.json(req.body);
})

app.post('/test',async(req,res)=>{
    res.status(201).json(req.body);
})

app.get('/healthz',async(req,res)=>{
    res.status(200).json({
        "status":"OK"
    });
})
app.listen(PORT,HOST);
console.log(`Running on http://${HOST}:${PORT}`);


module.exports = app
