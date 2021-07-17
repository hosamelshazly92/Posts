if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

mongoose.connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("==========> database success");
}).catch((err) => {
    console.log(err);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("==========> server success");
});
