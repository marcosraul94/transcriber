import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';


const styles = {
    root: {
        'height': '50%',
        'pointer-events': 'none',
    },
    section: {
        'width': '100%',
        'height': '50%',
        'display': 'flex',
        'flex-direction': 'column',
        'align-items': 'center',
    },
    up: {
        'justify-content': 'start',
    },
    down: {
        'justify-content': 'flex-end',
    }

};


const InfoDragDropFiles = props => {
    const { classes } = props;


    return (
        <div className={ classes.root }>
            <div className={ [classes.section, classes.up].join(' ') }>
                <Typography align="center">
                    Drag and Drop your files here 
                </Typography>

                <Typography align="center">
                    or
                </Typography>

                <Typography align="center">
                    Browse to upload files
                </Typography>
            </div>
            
            <div className={ [classes.section, classes.down].join(' ') }>
                <Typography align="center" variant="caption">
                    *only 16kHz .wav files are currently supported
                </Typography>
            </div>
            
        </div>
    );
};


export default withStyles(styles)(InfoDragDropFiles);
