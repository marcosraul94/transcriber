import React, { useContext } from 'react';
import { makeStyles, IconButton, Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { FileContext } from '../context/file';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});


const Icon = props => {
    const classes = useStyles(props);
    const { handleCancelFile } = useContext(FileContext);

    return (
        <Grid item xs={ 6 } className={ classes.root }> 
            <IconButton onClick={ (event) => handleCancelFile(props.name) } aria-label="delete">
                <DeleteIcon color="secondary" fontSize="small" />
            </IconButton>
        </Grid>
    );
};


export default Icon;
