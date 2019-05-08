const express = require('express');
const knex = require('knex');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

const server = express();

server.use(cors());
server.use(express.json());

server.listen(7200, () => {
    console.log('Server is listening on port 7200');
})

server.post('/api/register', (req, res) => {
    const user = req.body

    user.password = bcrypt.hashSync(user.password, 10)

    db('users')
    .insert(user)
    .then(user => {
        res.status(201).json(user)
    })
})

const secret = "we know far less about ourselves than we do others"
function generateToken(user){
    const payload = {
        subject: user.id,
        username: user.username
    };
    const options = {
        expiresIn: '1d'
    };
    
    return jwt.sign(payload, secret, options);
}

server.post('/api/login', (req, res) => {
    const {username, password} = req.body

    db('users')
    .where({username})
    .first()
    .then(user => {
        if(user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);

            res.status(201).json({token})
        } else {
            res.status(401).send('Invalid credentials')
        }
    })
})