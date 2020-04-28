import { createMuiTheme } from "@material-ui/core";


const lightBrown = '#fcf8f0';
const lightDarkBrown = '#f0c481';
const mediumDarkBrown = '#bd955b';
const darkBrown = '#553b18'; 


const theme = createMuiTheme({
    palette:  {
        primary: {
            main: lightBrown,
            dark: lightDarkBrown,
        },
        secondary: {
            main: mediumDarkBrown,
            dark: darkBrown,
        },
    }
});


export default theme;
