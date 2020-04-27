import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import IconDragDropFiles from './iconDragDropFiles';
import InfoDragDropFiles from './infoDragDropFiles';
import selectColors from './selectColors';
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
    const [ isDragHover, setDragHoverState ] = useState(false);
    
    const color = selectColors(isDragHover);
    const classes = useStyles(color)

    useEffect(() => {
        preventDropOnRestWindow();
        return restoreDropOnRestWindow
    }, []);

    function handleDrop(event) {
      overrideEventDefaults(event);
      setDragHoverState(false);
      props.addFiles(event);
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
            <IconDragDropFiles color={ color.icon } />
            <InfoDragDropFiles/>
        </Grid>
    );
};



export default DragDropFiles;
