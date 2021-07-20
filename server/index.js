const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const postsRoutes = require('./routes/posts.js');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.use((req, res, next) => {
    console.log(`==========> ${ req.method } ${ req.path }`);
    next();
});

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postsRoutes);

mongoose.connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("==========> database success");
}).catch((err) => {
    console.log(err);
});

mongoose.set('useFindAndModify', false);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("==========> server success");
});
