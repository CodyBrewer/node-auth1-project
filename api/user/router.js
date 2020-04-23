const router = require('express').Router();

router.get('/status', (req, res) => {
	res.send('We don\'t need no education. Yes you do, you just used a double negative.');
});

module.exports = router;
