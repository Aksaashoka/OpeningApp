require('dotenv').config();
const express = require('express');
const server = express();
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes/index.js');

server.use(express.json());
server.use(morgan('dev'));
server.use(
	cors({
		origin: '*',
		credentials: true,
		methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
		allowedHeaders: [
			'Origin',
			'X-Requested-With',
			'Content-Type',
			'Accept',
			'authorization',
		],
	})
);

server.use('/', routes);

module.exports = server;
