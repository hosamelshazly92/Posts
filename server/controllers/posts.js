const mongoose = require('mongoose');
const PostMessage = require('../models/postMessage.js');

const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}

const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('Not Found :(');
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(
        _id, 
        { ...post, _id }, 
        { new: true }
    );

    res.json(updatedPost);
}

const deletePost = async (req, res) => {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('Not Found :(');
    }

    await PostMessage.findByIdAndRemove(_id);

    res.json({ message: "post removed successfully" });
}

const likePost = async (req, res) => {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('Not Found :(');
    }

    const post = await PostMessage.findById(_id);
    const updatedPost = await PostMessage.findByIdAndUpdate(
        _id,
        { likeCount: post.likeCount + 1 },
        { new: true }
    );

    res.json(updatedPost);
}

module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost,
    likePost
};
