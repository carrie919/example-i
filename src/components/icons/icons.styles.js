import { makeStyles } from '@material-ui/core';

const iconStyles = makeStyles((theme) => ({
    userIcon: {
        height: '30px',
        width: '30px',
        position: 'absolute',
        top: '15px',
        bottom: '15px',
        left: '15px',
        right: '15px',
        [theme.breakpoints.down('xs')]: {
            top: '5px',
            bottom: '5px',
            left: '5px',
            right: '5px'
        }
    },
    twitter: {
        height: '17.94px',
        width: '22px',
        position: 'absolute',
        top: '10.99px',
        right: '9px',
        bottom: '11.07px',
        left: '9px'
    },
    fb: {
        height: '20px',
        width: '11px',
        position: 'absolute',
        top: '10px',
        left: '15px',
        bottom: '10px',
        right: '15px'
    },
    youtube: {
        height: '15.46px',
        width: '22px',
        position: 'absolute',
        left: '8px',
        right: '8px',
        top: '8px',
        bottom: '8px'
    },
    upArrow: {
        height: '30px',
        width: '30px',
        position: 'absolute',
        top: '15px',
        bottom: '15px',
        left: '15px',
        right: '15px',
        [theme.breakpoints.down('xs')]: {
            top: '5px',
            bottom: '5px',
            left: '5px',
            right: '5px'
        }
    },
    logoShrink: {
        [theme.breakpoints.down('xs')]: {
            height: '40px',
            width: '40px'
        }
    }
}))

export default iconStyles