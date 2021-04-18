const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();

//deprecated
// app.use(bodyparser.json());

//new way
app.use(express.json());


app.use(cors());

app.post('/api', (req, res) => {
    console.log(req.body);
    if(req.body.name == 'admin')
        res.status(401).send({'message': 'admin username not allowed'});
    else
        res.status(200).send({'message': 'sucesfully obtained data through POST'});
});

app.get('/api/:id', (req, res) => {
    let id = req.params.id;
    console.log(req.params);
    res.status(200).send({'message': 'sucesfully obtained data through GET',
    'id': id
    });
    // return "hello";
    // res.send('hello from server');
});

app.listen(3000, () => {
    console.log('Server listening at port 3000');
});