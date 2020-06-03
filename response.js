/**
 * A junior developer comes to you saying that
 * they have an obscure error message with
 * this code.
 *
 * Your task is to find out what the issue is,
 * come up with a solution and advise them on
 * how to go about solving the issue for
 * themselves.
 */

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('here you go')
});

app.post('/', (req, res) => {
	console.log(req.body);
	//{data: 'something', otherData: 'something else'}

	if (req.body.data) {
		res.send('Thank you very much!');
	}

	if (req.body.otherData) {
		res.send('No thanks')
	}

	res.send('Goodbye!')
});

app.listen(3000);