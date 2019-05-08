const express = require('express');
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