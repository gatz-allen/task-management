const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
var request = require('request');
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const port = process.env.PORT || 9000;
require('dotenv').config();

const users = require('./db/users.json');

const newData = {
        emails: ["lalala@gmail.com"] 
    }

// USER DATA RELATED
app.get("/users", async (req, res) => {
    // let users;
    fs.readFile(__dirname + '/db/users.json', 'utf8', (err, data) => {
        res.write(data);
        res.end();
    });
});

app.post("/users", (req, res) => {
    fs.writeFile(__dirname + '/db/users.json', JSON.stringify(req.body), 'utf8', (err, data) => {
        if(err) {
            console.log("error post registration");
            return;
        }
        
        console.log('done posting registration ', data);
    });
    console.log('SERVER - ', req.body);
});

// TASK DATA RELATED
app.get("/task", async (req, res) => {
    // let users;
    fs.readFile(__dirname + '/db/task.json', 'utf8', (err, data) => {
        console.log('LALALALA ', data);
        
        res.write(data);
        res.end();
    });
});

app.post("/task", (req, res) => {
    fs.writeFile(__dirname + '/db/task.json', JSON.stringify(req.body), 'utf8', (err, data) => {
        if(err) {
            console.log("error post registration");
            return;
        }
        
        console.log('done posting registration ', data);
    });
    console.log('SERVER - ', req.body);
});


// FOR TESTING POST
// PostConfig = {
//     url:'http://localhost:9000/users',
//     form: newData
// };

// request.post(PostConfig, () => {
//     console.log('done post');
// })

server.listen(port, error => {
    if (error) {
        console.log('something went wrong on server', error);
    } else {
        console.log('Server is listening on port ' + port);
    }
});