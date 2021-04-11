import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

//using express middleware to connect to our application. Every routes inside postRoutes 
//going to start with /posts

app.use(bodyParser.json({limit : "30mb",extended :"true"}));
app.use(bodyParser.urlencoded({limit : "30mb",extended :"true"}));
app.use(cors());

app.use('/posts',postRoutes);

const CONNECTION_URL = 'mongodb+srv://kiru1530:kiru7692@cluster0.gjgnb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

//to connect to db
mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT,() => console.log(`Server running on port : ${PORT}`)))
    .catch((error) =>  console.log(error.message));

mongoose.set('useFindAndModify', false);

