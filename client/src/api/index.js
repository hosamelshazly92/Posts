const axios = require('axios');

const URL = "http://localhost:5000/posts";

const fetchPosts = () => axios.get(URL);

const createPost = (newPost) => axios.post(URL, newPost);

const updatePost = (id, updatedPost) => axios.patch(`${ URL }/${ id }`, updatedPost);

const deletePost = (id) => axios.delete(`${ URL }/${ id }`);

module.exports = {
    fetchPosts,
    createPost,
    updatePost,
    deletePost
};
