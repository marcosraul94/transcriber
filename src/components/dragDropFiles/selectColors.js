import { lightBrown, lightDarkBrown, mediumDarkBrown, darkBrown } from '../../utils/colors';

const selectColors = (isDragHover) => {
    const notHoveringColors = {
        background: lightBrown,
        border: lightDarkBrown,
        icon: mediumDarkBrown
    };

    const hoveringColors = {
        background: lightDarkBrown,
        border: darkBrown,
        icon: darkBrown
    }
   
    return isDragHover ? hoveringColors : notHoveringColors;
};


export default selectColors;
