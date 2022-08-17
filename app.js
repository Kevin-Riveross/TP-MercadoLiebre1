const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.resolve(__dirname,'public')))

app.get('/',(req,res) => res.sendFile(path.resolve(__dirname,'views','home.html')))
app.get('*',(req,res) => res.send(path.resolve(__dirname,'404.html')));

app.listen (3000, () => { console.log('servidor funcionando');
})
