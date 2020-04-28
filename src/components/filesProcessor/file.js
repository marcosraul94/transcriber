import React from 'react';
import { Grid } from '@material-ui/core';
import Name from './name';
import Status from './status';


const File = props => {
    const { name } = props;
    
    
    return (
        <Grid item container>
            <Name name={ name } />
            <Status />
        </Grid>
    );
};


export default File;
