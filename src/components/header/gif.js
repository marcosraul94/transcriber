import React from 'react';
import { withStyles } from '@material-ui/styles';


const styles = {
    root: {
        'display': 'inline-block',
        'height': '80px',
    }
};


const HeaderGif = props => {
    const { classes } = props;
    return (
        <img 
            src={ process.env.PUBLIC_URL + "/cute_cat.gif" } 
            className={ classes.root }
            alt="Cute cat"
        />
    );
};


export default withStyles(styles)(HeaderGif);
