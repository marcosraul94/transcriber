import React from 'react';
import { makeStyles, Grid, CircularProgress } from '@material-ui/core';
import Button from './button';


const useStyles = makeStyles({
    progress: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});


const Status = props => {
    const classes = useStyles(props);


    return (
        <Grid item container xs={ 4 }>
            
            <Grid item xs={ 6 } className={ classes.progress } > 
                <CircularProgress disableShrink size={ 20 } color="secondary"/>
            </Grid>
        
            <Button name={ props.name } />
        </Grid>
    );
};


export default Status;
