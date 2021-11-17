import { makeStyles } from '@material-ui/core/styles';

import logo from '../../assets/onesaz-logo.png';

const footerStyles = makeStyles({
    logoContainer: {
        position: 'absolute',
        left: '17.36%',
        right: '72.22%',
        top: '31%',
        bottom: '29%',
        background: `url(${logo})`
    },
    signOutIcon: {
        height: '24px',
        width: '24px',
        position: 'absolute',
        left: '0%',
        right: '76%',
        top: '0%',
        bottom: '0%',
    },
    typo: {
        height: '25px',
        position: 'absolute',
        left: '17.36%',
        top: '37%',
        bottom: '38%',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '25px',
        color: '#31456AB2'
    },
    twitterPosition: {
        top: '30px',
        bottom: '30px',
        left: '989px'
    },
    fbPosition: {
        top: '30px',
        bottom: '30px',
        left: '1069px'
    },
    youtubePosition: {
        top: '30px',
        bottom: '30px',
        left: '1149px'
    },
    upArrowPosition: {
        top: '20px',
        bottom: '20px',
        right: '20px'
    },
    aboutUsPosition: {
        height: '20px',
        width: '76px',
        position: 'absolute',
        top: '46%',
        bottom: '43%',
        left: '52.99%',
        right: '41.88%'
    },
    productPosition: {
        height: '20px',
        width: '66px',
        position: 'absolute',
        top: '46%',
        bottom: '43%',
        left: '60.28%',
        right: '35.14%'
    },
    contactPosition: {
        height: '20px',
        width: '65px',
        position: 'absolute',
        top: '46%',
        bottom: '43%',
        left: '66.94%',
        right: '28.54%'
    }
})

export default footerStyles;