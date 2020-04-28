import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
    }
});


const Name = props => {
    const classes = useStyles(props);

    return (
        <Grid 
            item 
            xs={ 8 } 
            className={ classes.root } 
        > 
            { props.name } 
        </Grid>
    );
};


export default Name;
