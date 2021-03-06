import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    props: {
        MuiTypography: {
            variantMapping: {
                body2: 'span',
            },
            fontFamily: 'Montserrat'
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 620,
            md: 960,
            lg: 1280,
            xl: 1920
        },
    },
});

export default theme