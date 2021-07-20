const axios = require('axios');

const URL = "http://localhost:5000/posts";

const fetchPosts = () => axios.get(URL);

const createPost = (newPost) => axios.post(URL, newPost);

const updatePost = (id, updatedPost) => axios.patch(`${ URL }/${ id }`, updatedPost);

const deletePost = (id) => axios.delete(`${ URL }/${ id }`);

const likePost = (id) => axios.patch(`${ URL }/${ id }/like`);

module.exports = {
    fetchPosts,
    createPost,
    updatePost,
    deletePost,
    likePost
};
