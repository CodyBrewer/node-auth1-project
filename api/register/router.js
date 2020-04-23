const router = require('express').Router();

router.get('/status', (req, res) => {
	res.send('You best put seatbelt on your ears, roy! \'Cause I\'m gonna take them for the ride of their lives');
});

module.exports = router;

