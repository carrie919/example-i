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
            xl: 1920,
            custom1: 700,
            custom2: 390,
            custom3: 320,
        },
    },
});

export default theme