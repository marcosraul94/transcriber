import React, { createContext, useState } from 'react';
import { readDragDropFiles, addNewFiles, deleteFileByName } from './fileAccessors';


const FileContext =  createContext();

const FileContextProvider = props => {
    const [files, setFiles] = useState([]);
    
    function handleAddNewFiles(event){
        const newFiles = readDragDropFiles(event);
        setFiles( prevFiles => addNewFiles(prevFiles, newFiles) );
    }
    
    function handleCancelFile(name){
        setFiles( prevFiles => deleteFileByName(prevFiles, name) );
    }

    return (
        <FileContext.Provider  value={ { files, handleAddNewFiles, handleCancelFile } }>
            { props.children }
        </FileContext.Provider>
    );
};


export {
    FileContext,
    FileContextProvider
}
