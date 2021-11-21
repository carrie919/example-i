import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { StartButton } from '../custom-buttons/custom-buttons';

import useExamCardStyles from './exam-card.styles';


const ExamCard = ({ head, type, paper, to, from }) => {
    const classes = useExamCardStyles();
    return (
        <Card className={classes.root}>
            <Typography
                className={classes.cardHead}
                variant='h1'>{head}
            </Typography>
            <Typography variant='body2' className={classes.smallGreenBox}></Typography>
            <CardContent
                style={{padding: '0px'}}
            >
                <Typography variant='h1' className={classes.typeAndPaper}>
                    <Typography
                        className={`${classes.cardBody1} ${classes.type}`}
                        variant='body1'
                    >
                        type:<Typography className={classes.tagAns} variant='body2'>{type}</Typography>
                    </Typography>
                    <Typography
                        className={`${classes.cardBody1} ${classes.paper}`}
                        variant='body1'
                    >
                        paper:<Typography className={classes.tagAns} variant='body2'>{paper}</Typography>
                    </Typography>
                </Typography>

                <Typography
                    className={`${classes.cardBody1} ${classes.timings}`}
                    variant='body1'
                >
                    Available from:<Typography className={classes.timingAns} variant='body2'>{from}</Typography><br />
                    Ends on:<Typography className={classes.timingAns} variant='body2'>{to}</Typography>
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActionStyles}>
                <StartButton
                    myClassName={classes.cardButtonPosition}
                    handleClick={() => alert('will forward to exam')}
                />
            </CardActions>
        </Card>
    )
}

export default ExamCard;