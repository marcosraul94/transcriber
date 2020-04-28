import React from 'react';
import { makeStyles, IconButton, Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});


const Icon = props => {
    const classes = useStyles(props);


    return (
        <Grid item xs={ 6 } className={ classes.root }> 
            <IconButton aria-label="delete">
                <DeleteIcon color="secondary" fontSize="small" />
            </IconButton>
        </Grid>
    );
};


export default Icon;
