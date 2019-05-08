const express = require('express');
const knex = require('knex');
const cors = require('cors');
const bcrypt = require('bcryptjs');

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