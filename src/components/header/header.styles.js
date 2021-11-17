import { makeStyles } from '@material-ui/core';

import logo from '../../assets/onesaz-logo.png'

const headerStyles = makeStyles({
    logoContainer: {
        position: 'absolute',
        left: '17.36%',
        right: '72.22%',
        top: '31%',
        bottom: '29%',
        background: `url(${logo})`
    },
    userIconPosition: {
        left: '78.47%',
        right: '17.36%',
        top: '20%',
        bottom: '20%',
    },
    examsPosition: {
        height: '20px',
        width: '54px',
        position: 'absolute',
        top: '46%',
        bottom: '34%',
        left: '63.12%',
        right: '33.12%',
    },
    conceptsPosition: {
        height: '20px',
        width: '77px',
        position: 'absolute',
        top: '46%',
        bottom: '34%',
        left: '68.96%',
        right: '25.69%'
    }
});

export default headerStyles;