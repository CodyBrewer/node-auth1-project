const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const userRouter = require('./user/router.js');
const loginRouter = require('./login/router.js');
const registerRouter = require('./register/router.js');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/user/', userRouter);
app.use('/api/login/', loginRouter);
app.use('/api/register', registerRouter);

module.exports = app;

