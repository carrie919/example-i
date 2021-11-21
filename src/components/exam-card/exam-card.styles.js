import { makeStyles } from '@material-ui/core';

const useExamCardStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'start',
        height: '353px',
        width: '300px',
        padding: '40px 30px',
        position: 'relative',
        borderRadius: ' 24px',
        backgroundColor: '#EFF2F4',
        boxShadow: '8px 8px 20px #D1D9E6, -8px -8px 20px #FFFFFF',
        [theme.breakpoints.down('sm')]: {
            width: '186px',
            height: '260px',
            padding: '20px 15px',
            borderRadius: '18px'
        },
        [theme.breakpoints.down('xs')]: {
            padding: '10px 10px',
            width: '340px',
            height: '170px'
        }
    },
    cardHead: {
        height: '50px',
        marginBottom: '20px',
        fontFamily: 'Montserrat',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: '160%',
        display: 'flex',
        alignItems: 'center',
        color: '#31456A',
        [theme.breakpoints.down('sm')]: {
            height: '50px',
            fontSize: '16px',
            marginBottom: '10px',
            lineHeight: '110%'
        }
    },
    smallGreenBox: {
        height: '3px',
        width: '55px',
        backgroundColor: '#08C5A7',
        borderRadius: '5px',
        display: 'block',
        margin: "20px auto 30px 0px",
        [theme.breakpoints.down('sm')]: {
            margin: "10px auto 10px 0px",
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    typeAndPaper: {
        height: '25px',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '30px 0px 20px 0px',
        [theme.breakpoints.down('sm')]: {
            height: '40px',
            flexDirection: 'column',
            margin: "10px auto 15px 0px",
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'row',
            height: '20px'
        }
    },
    cardBody1: {
        fontFamily: 'Montserrat',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '180%',
        color: '#31456AB2',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px'
        }

    },
    type: {
        height: '25px',
        width: '150px',
        [theme.breakpoints.down('sm')]: {
            height: '20px',
        }
    },
    paper: {
        textAlign: 'end',
        height: '25px',
        width: '70px',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'start',
            height: '20px'
        }
    },
    timings: {
        height: '39px',
        width: '240px',
        lineHeight: '175%',
        margin: "20px 0px 30px 0px",
        [theme.breakpoints.down('sm')]: {
            margin: "15px 0px 20px 0px",
            width: '100%'
        }
    },
    tagAns: {
        padding: '0px',
        margin: '0px',
        fontFamily: 'Montserrat',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '500',
        color: '#08C5A7',
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px'
        }
    },
    timingAns: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px'
        }
    },
    cardActionStyles: {
        height: '56px',
        padding: '0px',
        [theme.breakpoints.down('sm')]: {
            height: '40px',
        },
        [theme.breakpoints.down('xs')]: {
            height: '33px',
            width: '120px'
        }
    },
    cardButtonPosition: {
        height: '56px',
        width: '200px',
        margin: '30px 20px 0px 20px',
        [theme.breakpoints.down('sm')]: {
            width: '186px',
            height: '40px',
            margin: "auto 18px auto 18px",
        },
        [theme.breakpoints.down('xs')]: {
            height: '33px',
            width: '120px',
            position: 'absolute',
            top: '110px',
            right: '0px'
        }
    }
}))

export default useExamCardStyles;