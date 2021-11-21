import { makeStyles } from '@material-ui/core';

const customButtonsStyles = makeStyles((theme) => ({
    buttonContent: {
        position: 'absolute',
        left: '14.71%',
        right: '14.71%',
        top: '26.79%',
        bottom: '28.57%',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '18px',
        lineHeight: '22px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#08C5A7'
    },
    defaultButton: {
        height: '56px',
        width: '170px',
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: '0%',
        bottom: '0%',
        backgroundColor: '#EFF2F4',
        border: '1px solid #08C5A7',
        boxShadow: '8px 8px 20px #D1D9E6, -8px -8px 20px #FFFFFF',
        borderRadius: '16px'
    },
    activeButtom: {
        height: '54px',
        width: '168px',
        position: 'absolute',
        left: '0px',
        top: '0px',
        backgroundColor: '#EFF2F4',
        boxShadow: 'inset -3px -3px 7px #FFFFFF, inset 3px 3px 7px #D1D9E6',
        borderRadius: '16px'
    },
    activeButtomBorder: {
        border: '1px solid #08C5A7',
        borderRadius: '16PX',
        opacity: '0.6'
    },
    subNavDefault: {
        fontFamily: 'Montserrat',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '200%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#08C5A7'
    },
    startButton: {
        border: 'none',
        borderRadius: '16px',
        height: '56px',
        width: '200px',
        backgroundColor: '#08C5A7',
        boxShadow: 'inset -1px -1px 1px #07B096, inset 1px 1px 1px #04E8C3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            height: '33px',
            width: '120px',
            borderRadius: '8px'
        }
    },
    startButtonContent: {
        width: '150px',
        height: '20px',
        fontFamily: 'Montserrat',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '100%',
        textAlign: 'center',
        color: '#FFFFFF',
        [theme.breakpoints.down('sm')]: {
            width: '110px',
            height: '15px',
            fontSize: '14px'
        }
    }
}));

export default customButtonsStyles;