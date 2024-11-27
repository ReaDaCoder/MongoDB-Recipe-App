import express from 'express';

const app = express();

app.listen(3004, () => {
  console.log('listening on port 3004');
});

app.get('/recipes', (req, res) => {
  res.json({ mssg: 'Welcome to recipes' });
});


/*const express = require('express')

const app = express()

app.listen(3001, () =>{
    console.log('listening on port 3000')
})

app.get('/recipes', (req, res)=>{
    res.json({mssg: "Welcome to recipes"})
})*/