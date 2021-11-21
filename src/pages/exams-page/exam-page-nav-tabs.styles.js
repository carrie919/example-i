import { makeStyles } from "@material-ui/core";

const examPageNavTabsStyles = makeStyles((theme) => ({
    examNavTabButton: {
        position: "relative",
        width: '170px',
        height: '56px'
    },
    allExams: {
        height: '30px',
        width: '110px',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            height: '20px',
            width: '87px',
            lineHeight: '100%'
        }
    },
    previousExams: {
        height: '30px',
        width: '160px',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            width: '125px',
            height: '20px',
            lineHeight: '100%'
        }
    },
    currentExams: {
        height: '30px',
        width: '150px',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            width: '117px',
            height: '20px',
            lineHeight: '100%'
        }
    },
    upcomingExams: {
        height: '30px',
        width: '180px',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            lineHeight: '100%',
            width: '140px',
            height: '20px'
        }
    },
}));

export default examPageNavTabsStyles;