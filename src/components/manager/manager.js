import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import DragDropFiles from '../dragDropFiles/dragDropFiles';
import getFiles from './accessFiles';


const Manager = props => {
    const [files, addFiles] = useState([]);

    function handleNewFiles(event) {
        const newFiles = getFiles(event);
        addFiles(newFiles);
    }

    return (
        <Grid container>
            <DragDropFiles addFiles={ handleNewFiles } />
            <Grid container item xs={ 12 } sm={ 6 }>  </Grid> // create transcriber and pass the files...
        </Grid>
    );
}


export default Manager;
