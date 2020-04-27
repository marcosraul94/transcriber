const getFiles = event => {
    const allFiles = accessFiles(event);
    return filterValidFiles(allFiles);
}

const accessFiles = (event) => {
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

const filterValidFiles = (files) => {
    const validExtension = '.wav';
    return files.filter( file => file.name.endsWith(validExtension) );
}


export default getFiles;
