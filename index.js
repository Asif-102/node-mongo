const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json())

const users = ['Asad','Moin','Sabed','Susmita','Sohana','Sabana'];

app.get('/', (req,res)=>{
    const fruit = {
        product:'ada',
        price:220
    }
    res.send(fruit);
});

app.get('/fruits/banana', (req, res)=>{
    res.send({fruit:'banana', quantity:1000, price:10000});
});

app.get('/users/:id',(req, res)=>{
    const Id = req.params.id;
    // console.log(req.query.sort); //http://localhost:3000/users/5?sort=desc
    const name = users[Id];
    res.send({Id, name});
})

// post
app.post('/addUser', (req, res)=>{
    // save to database
    
    const user = req.body;
    user.id = 55;
    res.send(user);
})

app.listen(3000, ()=>console.log('Listenting to port 3000'));