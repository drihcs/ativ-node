const express = require('express');

const app = express();

app.get('/',(req,res) =>{
    res.send('Welcome to Our React Application');
});

app.get('/About',(req,res) =>{
    res.send('Simple React application with separate component files and CSS styling.');
});

app.get('/Features',(req,res) =>{
    res.send('Key Features');
});

app.get('/Contact',(req,res) =>{
    res.send('Email: info@example.com');
});

app.listen(3000,()=>{
    console.log('Servidor rodando no http:/localhost:3000')
});
