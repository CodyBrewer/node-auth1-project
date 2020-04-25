const knexSessionStore = require('connect-session-knex')(session);
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const restricted = require('./auth/restricted-middleware.js')

const userRouter = require('./user/router.js');
const authRouter = require('./auth/router.js');

const app = express();

// Session
const sessionConfig = {
    name: 'Pre-Hanks-Wilson', 
    secret="secret done the wrong way",
    cookie: {
        maxAge: 3600 * 1000,
        secure: false,
        httpOnly: true
    },
    resave: false,
    saveUnintialized: false,

    store: new knexSessionStore(
        {
            knex: require('../data/dbConfig.js'),
            tablename: 'sessions',
            sidfieldname: 'sid',
            createtable: true,
            clearInterval: 3600 * 1000
        }
    )
}

// Middleware
app.use(helmet());
app.use(express.json());
app.use(cors());

app.use(session(sessionConfig));

// Routes
app.use('/api/users', restricted, userRouter);
app.use('/api/auth', authRouter);

app.get('/status', (req, res) => {
    res.json({ api: 'up'})
})

module.exports = app;
