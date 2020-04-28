import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import DragDropFiles from '../dragDropFiles/dragDropFiles';
import getFiles from './accessFiles';
import FilesProcessor from '../filesProcessor/filesProcessor';


const Manager = props => {
    const [files, addFiles] = useState([]);

    function handleNewFiles(event) {
        const newFiles = getFiles(event);
        console.log(newFiles);
        addFiles([ ...files, ...newFiles ]);
    }

    return (
        <Grid container>
            <DragDropFiles addFiles={ handleNewFiles } />
            <FilesProcessor files={ files }/>
        </Grid>
    );
}


export default Manager;
