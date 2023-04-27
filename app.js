
require("dotenv").config();
require("./config/dbConfig").connect();
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');


    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

const classDetailRoutes = require('./routes/classRoute/classDetailRoute')
app.use('/classDetail', classDetailRoutes);

const studentDetailRoutes = require('./routes/studentRoute/studentDetailRoute')
app.use('/studentDetail', studentDetailRoutes);

const loginRoutes = require('./routes/auth')
app.use('/login', loginRoutes)


const getUserRoutes = require('./routes/getUser')
app.use('/getUser', getUserRoutes)

const subjectQuestionsRoutes = require('./routes/classRoute/subjectQuestionsRoute')
app.use('/subques', subjectQuestionsRoutes)

const testRoutes = require('./routes/classRoute/testRoute')
app.use('/test', testRoutes)

const subjectRoutes = require('./routes/classRoute/subjectRoute')
app.use('/subject', subjectRoutes)

const testSubjectRoutes = require('./routes/classRoute/testSubjectRoute')
app.use('/testsubject', testSubjectRoutes)

module.exports = app;