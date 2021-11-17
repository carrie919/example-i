import { makeStyles } from '@material-ui/core';

const useExamCardStyles = makeStyles({
    root: {
        textAlign: 'start',
        height: '353px',
        width: '300px',
        position: 'absolute',
        left: '0px',
        right: '0px',
        top: '0px',
        borderRadius: ' 24px',
        backgroundColor: '#EFF2F4',
        boxShadow: '8px 8px 20px #D1D9E6, -8px -8px 20px #FFFFFF'
    },
    cardHead: {
        height: '50px',
        width: '240px',
        position: 'absolute',
        left: '30px',
        right: '8.62%',
        top: '11.33%',
        bottom: '74.5%',
        fontFamily: 'Montserrat',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: '160%',
        display: 'flex',
        alignItems: 'center',
        color: '#31456A'
    },
    smallGreenBox: {
        height: '3px',
        width: '55px',
        position: 'absolute',
        left: '30px',
        right: '72.41%',
        top: '31.16%',
        bottom: '67.99%',
        backgroundColor: '#08C5A7',
        borderRadius: '5px'
    },
    cardBody1: {
        fontFamily: 'Montserrat',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '180%',
        color: '#31456AB2'

    },
    type: {
        height: '25px',
        width: '150px',
        position: 'absolute',
        top: '143px',
        right: '120px',
        bottom: '185px',
        left: '30px'
    },
    paper: {
        textAlign: 'end',
        height: '25px',
        width: '70px',
        position: 'absolute',
        top: '143px',
        bottom: '185px',
        left: '199px',
        right: '31px'
    },
    timings: {
        height: '39px',
        width: '240px',
        lineHeight: '175%',
        position: 'absolute',
        top: '188px',
        right: '30px',
        bottom: '126px',
        left: '30px'
    },
    body2: {
        padding: '0px',
        margin: '0px',
        fontFamily: 'Montserrat',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '500',
        color: '#08C5A7'
    },
    cardButtonPosition: {
        height: '56px',
        width: '200px',
        position: 'absolute',
        top: '257px',
        right: '50px',
        bottom: '40px',
        left: '50px'
    }
})

export default useExamCardStyles;