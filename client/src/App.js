import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import moments from "./img/moments.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";

const App = () => {
    const classes = useStyles();

    return (
        <Container maxwidth="lg">
            <AppBar 
                position="static" 
                color="inherit"
                className={ classes.appBar }
            >
                <Typography 
                    variant="h2" 
                    align="center"
                    className={ classes.heading }
                >
                    Moments
                </Typography>
                <img 
                    src={moments} 
                    alt="moments" 
                    height="60" 
                    className={ classes.image }
                />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid 
                        container 
                        justify="space-between" 
                        alignItems="stretch" 
                        spacing={ 3 }
                    >
                        <Grid 
                            item 
                            xs={ 12 }
                            sm={ 7 }
                        >
                            <Posts />
                        </Grid>
                        <Grid 
                            item 
                            xs={ 12 }
                            sm={ 4 }
                        >
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
