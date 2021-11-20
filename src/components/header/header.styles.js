import { makeStyles } from '@material-ui/core';

import logo from '../../assets/onesaz-logo.png'

const headerStyles = makeStyles((theme) => ({
    header: {
        height: '100px',
        width: '100%',
        bgcolor: '#FAFAFA',
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: '0%',
        bottom: '95.6%',
        zIndex: '99',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            height: '60px',
        }
    },
    headerContent: {
        height: '80px',
        width: '940px',
        bgcolor: '#FAFAFA',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: '10px',
        marginRight: '10px'
    },
    logoContainer: {
        position: 'relative',
        height: '100%',
        width: '150px',
        [theme.breakpoints.down('xs')]: {
            width: '100px',
        }
    },
    logo: {
        display: 'block',
        width: '150px',
        position: 'absolute',
        top: '21px',
        bottom: '19px',
        background: `center / contain no-repeat url(${logo})`,
        [theme.breakpoints.down('xs')]: {
            width: '100px',
        }
    },
    headerNavContainer: {
        position: 'relative',
        height:'100%',
        width:'281px',
        [theme.breakpoints.down('xs')]: {
            width: '210px',
        }
    },
    userIconPosition: {
        position: 'absolute',
        right: '0px',
        top: '10px',
        bottom: '10px',
        [theme.breakpoints.down('xs')]: {
           top: '20px',
           bottom: '20px'
        }
    },
    examsPosition: {
        height: '20px',
        width: '54px',
        position: 'absolute',
        top: '36px',
        bottom: '24px',
        left: '0px'
    },
    conceptsPosition: {
        height: '20px',
        width: '77px',
        position: 'absolute',
        top: '36px',
        bottom: '34px',
        left: '84px',
        [theme.breakpoints.down('xs')]: {
            left: '79px',
         }
    }
}));

export default headerStyles;