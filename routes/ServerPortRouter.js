const express = require('express');
const app = express();
const ServerPortRouter = express.Router();

const ServerPort = require('../models/ServerPort');

ServerPortRouter.route('/add').post((req, res) => {
	const serverport = new ServerPort( req.body );
	serverport.save()
		.then(serverport => { res.json("Server add successfully. ")})
		.catch( err => {
			res.status(400).send('Unable to save in database.')
		});
	});

ServerPortRouter.route('/').get((req, res) => {
	ServerPort.find((err, serverport) => {
		if(err) { console.log(err); }
		else {
			res.json(serverport);
		}
	})
});


module.exports = ServerPortRouter;