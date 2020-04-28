import React from 'react';
import BackupIcon from '@material-ui/icons/Backup';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    root: {
        'width': '100%',
        'height': '50%',
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'flex-end',
        'pointer-events': 'none',
    },
    icon: {
        'color': props => props.color,
        'font-size': '120px',
    },
});

const IconDragDropFiles = props => {
    const classes = useStyles(props)
    
    return (
        <div className={ classes.root }>
            <BackupIcon className={ classes.icon }/>
        </div>
    );
};


export default IconDragDropFiles;
