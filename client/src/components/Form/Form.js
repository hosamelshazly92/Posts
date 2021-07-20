import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { 
    TextField, 
    Button,
    Typography,
    Paper 
} from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
    const classes = useStyles();

    const [postData, setPostData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: ""
    });

    const dispatch = useDispatch();

    const post = useSelector(state => currentId ? state.posts.find(itm => itm._id === currentId) : null);

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }

        clear();
    }

    const clear = () => {
        setCurrentId(null);

        setPostData({
            creator: "",
            title: "",
            message: "",
            tags: "",
            selectedFile: ""
        });
    }
    
    return (
        <Paper className={ classes.paper }>
            <form 
                className={ classes.root } 
                autoComplete="off" 
                noValidate
                onSubmit={ handleSubmit }
            >
                <Typography variant="h6">
                    { currentId ? "Edit" : "Create a Moment" }
                </Typography>

                <TextField 
                    name="creator"
                    variant="outlined"
                    label="Creator"
                    fullWidth
                    value={ postData.creator }
                    onChange={ (evt) => setPostData({ 
                        ...postData, creator: evt.target.value 
                    }) }
                />

                <TextField 
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={ postData.title }
                    onChange={ (evt) => setPostData({ 
                        ...postData, title: evt.target.value 
                    }) }
                />

                <TextField 
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    value={ postData.message }
                    onChange={ (evt) => setPostData({ 
                        ...postData, message: evt.target.value 
                    }) }
                />

                <TextField 
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    value={ postData.tags }
                    onChange={ (evt) => setPostData({ 
                        ...postData, tags: evt.target.value 
                    }) }
                />

                <div className={ classes.fileInput }>
                    <FileBase 
                        type="file"
                        multiple={ false }
                        onDone={({ base64 }) => setPostData({
                            ...postData, selectedFile: base64
                        })}
                    />
                </div>

                <Button 
                    className={ classes.buttonSubmit }
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                >Submit</Button>

                <Button
                    className={ classes.buttonClear }
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={ clear }
                    fullWidth
                >Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;
