import React, { useState } from "react";
import useStyles from "./styles";
import { 
    TextField, 
    Button,
    Typography, 
    Paper 
} from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

const Form = () => {
    const classes = useStyles();

    const [postData, setPostData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: ""
    });

    const dispatch = useDispatch();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(createPost(postData));
    }

    const clear = () => {

    }
    
    return (
        <Paper className={ classes.paper }>
            <form 
                className={ classes.root } 
                autoComplete="off" 
                noValidate
                onSubmit={ handleSubmit }
            >
                <Typography variant="h6">Create a Moment</Typography>

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
