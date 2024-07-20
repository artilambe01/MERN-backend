// const http = require('http');


// const hostname = 'localhost';

// const port = '3005';


// const server = http.createServer((req, res) => {
//  res.end('hello from node server')

// })


// server.listen(port , hostname , () => {

//     console.log(`server is running on http://${hostname}:${port}`);

// })



// const express = require('express');

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();
const app = express();
const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

app.use(cors());

app.get('/courses', ( req, res) => {

 


    const courses = [
        {
            id: 1,
            courseName: "MERN"
        },
        {
            id: 2,
            courseName: "MEAN"
        },
        {
            id: 3,
            courseName: "MERP"
        }
    ]

  res.send(courses);

})

//servies

app.get('/services', (req, res) => {

    res.send('hello from servies page');

})


//about


app.get('/about', (req , res) => {

    res.send('hello from about server');

})

app.listen(port,hostname, () => {

    console.log(`server is running on http://${hostname}:${port}`)

})


