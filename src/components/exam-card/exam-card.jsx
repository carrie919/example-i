import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import { StartButton } from '../custom-buttons/custom-buttons';

import useExamCardStyles from './exam-card.styles';

const theme = createTheme({
    props: {
        MuiTypography: {
            variantMapping: {
                body2: 'span',
            },
            fontFamily: 'Montserrat'
        },
    }
});



const ExamCard = ({head, type, paper, to, from }) => {
    const classes = useExamCardStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <ThemeProvider theme={theme}>
                    <Typography
                        className={classes.cardHead}
                        variant='h1'>{head}
                    </Typography>
                    <Typography variant='body2' className={classes.smallGreenBox}></Typography>
                    <Typography
                        className={`${classes.cardBody1} ${classes.type}`}
                        variant='body1'
                    >
                        type:<Typography className={classes.body2} variant='body2'>{type}</Typography>
                    </Typography>
                    <Typography
                        className={`${classes.cardBody1} ${classes.paper}`}
                        variant='body1'
                    >
                        paper:<Typography className={classes.body2} variant='body2'>{paper}</Typography>
                    </Typography>
                    <Typography
                        className={`${classes.cardBody1} ${classes.timings}`}
                        variant='body1'
                    >
                        Available from:<Typography variant='body2'>{from}</Typography><br />
                        Ends on:<Typography variant='body2'>{to}</Typography>
                    </Typography>
                </ThemeProvider>
            </CardContent>
            <CardActions>
                <StartButton
                    myClassName={classes.cardButtonPosition}
                    handleClick={() => alert('will forward to exam')}
                />
            </CardActions>
        </Card>
    )
}

export default ExamCard;

