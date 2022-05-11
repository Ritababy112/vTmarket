const express = require('express');
const cors = require('cors');
const parser = require('body-parser');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static(__dirname));
app.use(cors());
app.use(parser());

app.listen(5000, ()=>{
    console.log('connected on 5000')
})

app.get('/company/company-updates/press-releases/',function(req,res){
    res.sendfile(path.resolve(__dirname, 'press1.html'))
})

app.get('/company/company-updates/press-releases/2/',function(req,res){
    res.sendfile(path.resolve(__dirname, 'press2.html'))
})