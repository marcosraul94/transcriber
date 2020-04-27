import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {
        'min-height': '100vh',
        'background': 'linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%)',
    }
};

const Container = props => {
    const { classes } = props;
    return (
        <Grid 
            container 
            className={ classes.root }
        >
            <Grid item xs={ false } sm={ 2 }/>
            <Grid 
                item 
                container
                justify="center"
                alignItems="center" 
                xs={ 12 } sm={ 8 } 
            > 
                { props.children } 
            </Grid>
            <Grid item xs={ false } sm={ 2 }/>
        </Grid>
    );
};


export default withStyles(styles)(Container);
