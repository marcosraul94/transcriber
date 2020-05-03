import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { FileContextProvider } from './context/file';
import Header from './header/header';
import DragDropFiles from './dragDropFiles/dragDropFiles';
import FilesProcessor from './filesProcessor/filesProcessor';


const rootPaddingTopBot = 10;
const rootHeight = 500;
const headerHeight = 100;
const interfaceHeight = rootHeight - headerHeight - 2*rootPaddingTopBot ;

const styles = theme => ({
    root: {
        backgroundColor: 'white',
        height: rootHeight + 'px',
        boxShadow: '2px 2px 10px #A9A9A9', 
        borderRadius: '10px',
        padding: `${ rootPaddingTopBot }px 25px`,
        width: '100%',
        [ theme.breakpoints.up('sm') ]: {
            maxWidth: '800px',
        },    
    }, 
    header: {
        height: headerHeight + 'px',
    },
    interface: {
        height: interfaceHeight + 'px',
    }

});

const Menu = props => {
    const { classes } = props;
    
    
    return (
        <Grid item container xs={ 12 } className={ classes.root } spacing={ 2 } >
            <Grid item container xs={ 12 } className={ classes.header } > 
                <Header/> 
            </Grid>
                
            <Grid item container xs={ 12 } className={ classes.interface } >
                <FileContextProvider>
                    <DragDropFiles/>
                    <FilesProcessor/>
                </FileContextProvider>
            </Grid>
        </Grid>
    );
}


export default withStyles(styles)(Menu);
