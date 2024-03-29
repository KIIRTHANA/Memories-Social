import React, {useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import {getPosts} from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Forms';
import useStyles from './styles';


import memories from './images/memories.png';
const App = ( ) =>{
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getPosts());
    }, [dispatch]);

    return(
      <Container maxwidth="lg">
          <AppBar className={classes.appBar} position = "static" color="inherit">
              <Typography className={classes.heading} variant="h2" align= "center">Memories !</Typography>
              <img className={classes.image} src={memories} alt="memories" height="60"/> 
          </AppBar>
          <Grow in>
            <Grid container justify="space-between" alignItems="stretch" spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Posts />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Form />
                </Grid>
            </Grid> 

          </Grow>

      </Container>
    )
}
export default App;