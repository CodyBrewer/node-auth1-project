require('dotenv').config();
const server = require('./api/server.js');

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
	console.log(`server listening on localhost:${PORT}`);
});

server.get('/api', (req, res) => {
	res.send('hey harry did you see that ludicrous display last night?');
});
