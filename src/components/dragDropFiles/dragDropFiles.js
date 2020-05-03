import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import IconDragDropFiles from './icon';
import InfoDragDropFiles from './info';
import selectPalette from './color';
import { FileContext } from '../context/file';
import { 
  overrideEventDefaults, 
  preventDropOnRestWindow, 
  restoreDropOnRestWindow,
} from './draggingEvents';


const useStyles = makeStyles({
    root: {
        'border': '2px dotted',
        'border-color': props => props.border,
        'border-radius': '10px',
        'background-color': props => props.background,
    },
});

const DragDropFiles = props => {
    const { handleAddNewFiles } = useContext(FileContext);
    const [ isDragHover, setDragHoverState ] = useState(false);
    
    const palette = selectPalette(isDragHover, useTheme());
    const classes = useStyles(palette)

    
    useEffect(() => {
        preventDropOnRestWindow();
        return restoreDropOnRestWindow
    }, []);

    function handleDrop(event) {
      overrideEventDefaults(event);
      setDragHoverState(false);
      handleAddNewFiles(event);
    }

    function handleDrag(event, isDragHover){
        overrideEventDefaults(event)
        setDragHoverState(isDragHover)   
    }

    return (
        <Grid 
            item
            xs
            className={ classes.root }

            onDrag={overrideEventDefaults}
            onDragStart={overrideEventDefaults}
            onDragEnd={overrideEventDefaults}
            onDragOver={overrideEventDefaults}
            onDragEnter={(event) => handleDrag(event, true)}
            onDragLeave={(event) => handleDrag(event, false)}
            onDrop={handleDrop}
        >
            <IconDragDropFiles color={ palette.icon } />
            <InfoDragDropFiles/>
        </Grid>
    );
};



export default DragDropFiles;
