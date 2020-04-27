import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import HeaderGif from './headerGif';



const styles = {
    root: {
        'width': '100%',
        'display': 'flex',
        'align-items': 'center',
        // 'justify-content': 'space-between',
    }
};


const Header = props => {
    const { classes } = props;
    return (
        <Typography variant="h5" className={ classes.root }>
           <HeaderGif/> Mapuchi audio transcriber 
        </Typography>
    );
};



export default withStyles(styles)(Header);
