import { makeStyles } from "@material-ui/core";

const examCardListStyles = makeStyles((theme) => ({
    examCardsContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'fit-content',
        marginTop: '25px',
    },
    examCardsGrid: {
        width: '940px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: '20px',
        [theme.breakpoints.down('sm')]: {
            width: '600px',
            gridGap: '20px'
        },
        [theme.breakpoints.down('xs')]: {
            width: '340px',
            gridTemplateColumns: '1fr',
            gridGap: '10px'
        }
    }
}));

export default examCardListStyles;