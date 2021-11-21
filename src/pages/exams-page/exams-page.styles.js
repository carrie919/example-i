import { makeStyles } from "@material-ui/core";

const examPageStyles = makeStyles((theme) => ({
    examPage: {
        height: '1972px',
        width: '100%',
        backgroundColor: '#ECF0F3CC',
        [theme.breakpoints.down('sm')]: {
            height: 'auto'
        }
    },
    introContainer: {
        height: '118.68px',
        width: '100%',
        marginTop: '101.32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            marginTop: '50px',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '40px',
            height: '80px'
        }
    },
    introHead: {
        width: '680px',
        height: '44px',
        color: '#31456A',
        fontFamily: 'Montserrat',
        fontSize: '36px',
        fontStyle: 'normal',
        fontWeight: '800',
        lineHeight: '44px',
        letterSpacing: '0px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '530px',
            fontSize: '28px'
        },
        [theme.breakpoints.down('sm')]: {
            width: '340px',
            fontSize: '18px'
        }
    
    },
    partOfHead: {
        height: '44px',
        width: '124px',
        color: '#08C5A7',
        fontFamily: 'Montserrat',
        fontSize: '36px',
        fontStyle: 'normal',
        fontWeight: '800',
        lineHeight: '44px',
        letterSpacing: '0px',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100px',
            fontSize: '28px'
        },
        [theme.breakpoints.down('sm')]: {
            width: '60px',
            fontSize: '18px'
        }
    },
    introDes: {
        width: '274px',
        height: '51px',
        color: '#31456AB2',
        fontFamily: 'Montserrat',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '200%',
        letterSpacing: '0px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '213px',
            fontSize: '14px'
        }
    },
    navTabButtonsContainer: {
        width: '792px',
        height: '54px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridGap: '40px',
        margin: '35px auto 100px auto',
        [theme.breakpoints.down('sm')]: {
           gridTemplateColumns: '1fr 1fr',
           width: '340px',
           height: '128px',
           gridGap: '20px 10px',
           marginBottom: '35px'
        }
    },
    subNavTabButtonsContainer: {
        width: '940px',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: '100px auto 20px auto',
        [theme.breakpoints.down('sm')]: {
            height: '20px',
            width: '600px',
            marginTop: '50px'
        },
        [theme.breakpoints.down('xs')]: {
            width: '340px',
            height: '80px',
            justifyContent: 'center'
        }
    },
    subNavTabButtonsGrid: {
        width: '720px',
        height: '30px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridGap: '40px',
        [theme.breakpoints.down('sm')]: {
            height: '20px',
            width: '500px',
            gridGap: '15px'
        },
        [theme.breakpoints.down('xs')]: {
            width: '340px',
            gridTemplateColumns: '1fr',
            height: '90px',
            gridGap: '3px'
        }

    },
    subNavTabUnderline: {
        display: 'block',
        width: '940px',
        height: '2px',
        margin: '20px auto 25px auto',
        backgroundColor: '#D1D9E6',
        [theme.breakpoints.down('sm')]: {
            width: '600px'
        },
        [theme.breakpoints.down('xs')]: {
            width: '0px'
        }
    }
}));

export default examPageStyles;