import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Header from './header';
import File from './file';
import { FileContext } from '../context/file';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        marginLeft: '20px',
        maxHeight: '350px',
        overflow: 'auto',
        flexGrow: '1',
        flexWrap: 'nowrap',
    },
});


const FileProcessor = props => {
    const { files } = useContext(FileContext);
    const classes = useStyles(props);
    
    return (
        <Grid 
            container 
            item 
            direction="column"
            xs={ 12 } 
            sm={ 6 }
            className={ classes.root }
        >  
            <Header />
            { files.map( file => <File key={ file.name } name={ file.name } /> ) }
        </Grid>
    );
};


export default FileProcessor;
