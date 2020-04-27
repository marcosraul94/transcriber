import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Header from './header/header';
import Manager from './manager/manager';

const rootPaddingTopBot = 10;
const rootHeight = 500;
const headerHeight = 100;
const interfaceHeight = rootHeight - headerHeight - 2*rootPaddingTopBot ;

const styles = theme => ({
    root: {
        'background-color': 'white',
        'height': rootHeight + 'px',
        'box-shadow': '2px 2px 10px #A9A9A9', 
        'border-radius': '10px',
        'padding': `${ rootPaddingTopBot }px 25px`,
        'width': '100%',
        [ theme.breakpoints.up('sm') ]: {
            'max-width': '800px',
        },    
    }, 
    header: {
        'height': headerHeight + 'px',
    },
    interface: {
        'height': interfaceHeight + 'px',
    }

});

const Menu = props => {
    const { classes } = props;
    return (
        <Grid item container xs={ 12 } className={ classes.root } spacing={ 2 } >
            <Grid item container xs={ 12 } className={ classes.header } > <Header/> </Grid>
            <Grid item container xs={ 12 } className={ classes.interface } > <Manager/> </Grid>
        </Grid>
    );
}


export default withStyles(styles)(Menu);
