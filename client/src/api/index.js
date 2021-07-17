const axios = require('axios');

const URL = "http://localhost:5000/posts";

const fetchPosts = () => axios.get(URL);

module.exports = fetchPosts;
