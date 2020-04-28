import React from 'react';
import { makeStyles, Grid ,Typography } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        
    },
});

const Header = props => {
    const classes = useStyles(props);

    return (
        <Grid 
            item
            container
            className={ classes.root }
        >
            <Grid item xs={ 8 } > 
                <Typography variant="h6"> File name </Typography>
            </Grid>
            <Grid item xs={ 2 } >
                <Typography variant="h6"> Status </Typography>
            </Grid>
        </Grid>
    );
};


export default Header;
