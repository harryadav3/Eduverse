const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

const app = express();

const userRouter =require('./routes/userRoutes');
const adminRouter = require('./routes/adminRoutes');


app.use(cors());
app.use(bodyparser.json());

app.use('/api/v1/user',userRouter);
app.use('/api/v1/admin',adminRouter);





module.exports = app;