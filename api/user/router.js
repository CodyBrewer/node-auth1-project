const router = require('express').Router();

const Users = require('./models');

router.get('/status', (req, res) => {
	res.send('We don\'t need no education. Yes you do, you just used a double negative.');
});

router.get('/', (req, res) => {
	Users.findAll()
		.then( (users) => res.json(users))
		.catch( (err) => res.send(err));
})

module.exports = router;
