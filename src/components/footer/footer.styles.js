import { makeStyles } from '@material-ui/core/styles';

import logo from '../../assets/onesaz-logo.png';

const footerStyles = makeStyles((theme) => ({
    footer: {
        Height: '200px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        [theme.breakpoints.down('xs')]: {
            height: '250px'
        }
    },
    footerContentOne: {
        minHeight: '100px',
        width: '940px',
        backgroundColor: '#FAFAFA',
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        margin: 'auto 10px',
        [theme.breakpoints.down('md')]: {
            width: '93%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '93%',
            flexDirection: 'column',
            height: '150px'
        }
    },
    contentDivider: {
        component: 'span',
        height: '2px',
        width: '940px',
        position: 'absolute',
        left: '0px',
        right: '0px',
        bottom: '-1px',
        backgroundColor: '#EFF2F4',
        borderRadius: '5px',
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    footerContentTwo: {
        height: '100px',
        width: '940px',
        backgroundColor: '#FAFAFA',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 'auto 10px',
        [theme.breakpoints.down('md')]: {
            width: '93%',
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            height: '100px'
        }
    },
    contentOneLinks: {
        height: '100%',
        width: '265px',
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '46px',
        paddingBottom: '34px',
        marginRight: '160px',
        [theme.breakpoints.down('md')]: {
            marginRight: '130px'
        },
        [theme.breakpoints.down('xs')]: {
            alignItems: 'center',
            justifyContent: 'space-evenly',
            height: '50px',
            width: '100%',
            margin: '0',
            padding: '0'
        }
    },
    logoContainer: {
        width: '150px',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            width: '100px',
            height: '100px'
        }
    },
    logo: {
        display: 'block',
        height: '40px',
        width: '150px',
        background: `center / contain no-repeat url(${logo})`,
        [theme.breakpoints.down('xs')]: {
            width: '100px',
        }
    },
    signOutIcon: {
        height: '24px',
        width: '24px',
        position: 'absolute',
        right: '76%',
        top: '0%',
        bottom: '0%',
        left: '0%'
    },
    typo: {
        height: '25px',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '25px',
        color: '#31456AB2'
    },
    contentTwoIcons: {
        height: '100%',
        width: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    upArrowPosition: {
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        [theme.breakpoints.down('md')]: {
            right: '450px',
        },
        [theme.breakpoints.down('sm')]: {
            right: '250px',
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    aboutUsPosition: {
        height: '20px',
        width: '76px'
    },
    productPosition: {
        height: '20px',
        width: '66px'
    },
    contactPosition: {
        height: '20px',
        width: '65px'
    }
}));

export default footerStyles;