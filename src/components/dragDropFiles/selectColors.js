const selectColors = (isDragHover, theme) => {
    const { primary, secondary } = theme.palette;
    
    const notHoveringColors = {
        background: primary.main,
        border: primary.dark,
        icon: secondary.main
    };
    
    const hoveringColors = {
        background: primary.dark,
        border: secondary.dark,
        icon: secondary.dark
    }
   
    return isDragHover ? hoveringColors : notHoveringColors;
};


export default selectColors;
