import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Name from './name';
import Status from './status';


const File = props => {
    const { name } = props;
    
    useEffect( () => {
        
    }, [name]);
    
    return (
        <Grid item container>
            <Name name={ name } />
            <Status name={ name }/>
        </Grid>
    );
};


export default File;
