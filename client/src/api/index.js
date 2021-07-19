const axios = require('axios');

const URL = "http://localhost:5000/posts";

const fetchPosts = () => axios.get(URL);

const createPost = (newPost) => axios.post(URL, newPost);

module.exports = {
    fetchPosts,
    createPost
};
