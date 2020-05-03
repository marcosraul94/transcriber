const readDragDropFiles = event => {
    const newFiles = accessDragDropFiles(event);
    return filterByExtension(newFiles);
}

const addNewFiles = (prevFiles, newFiles) => {
    const updatedFiles = [...prevFiles];

    for (const newFile of newFiles) {
        const isNotAdded = updatedFiles.every( file => file.name !== newFile.name );
        if (isNotAdded) updatedFiles.push(newFile);
    }

    return updatedFiles;
};


const deleteFileByName = (files, name) => {
    return files.filter( file => file.name !== name);
}

const accessDragDropFiles = (event) => {
    const files = [];
    if (event.dataTransfer.items) {
        // Use DataTransferItemList interface to access the file(s)
        for (let i = 0; i < event.dataTransfer.items.length; i++) {
          // If dropped items aren't files, reject them
          if (event.dataTransfer.items[i].kind === 'file') {
            files.push( event.dataTransfer.items[i].getAsFile() );
          }
        }
      } else {
        // Use DataTransfer interface to access the file(s)
        for (var i = 0; i < event.dataTransfer.files.length; i++) {
            files.push( event.dataTransfer.files[i] );
        }
      }
      
    return files;
}

const filterByExtension = (files, extension = '.wav') => {
    return files.filter( file => file.name.endsWith(extension) );
}

export {
    readDragDropFiles,
    addNewFiles,
    deleteFileByName
} ;
