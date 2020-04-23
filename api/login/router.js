const router = require('express').Router()

router.get('/status', (req, res) => {
	res.send('Oh shut up dumpo, the elaphant that got dumped');
});

module.exports = router;

