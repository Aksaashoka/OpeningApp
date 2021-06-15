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
		origin: process.env.FRONTEND_URL,
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

server.use((err, req, res, next) => {
	const status = err.status || 500;
	const message = err.message || err;
	console.error(err);
	res.status(status).send({response: '', message});
});

module.exports = server;
