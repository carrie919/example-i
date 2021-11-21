import React from 'react';
import { Box } from '@material-ui/core'

import examCardListStyles from './exam-card-list.styles';
import ExamCard from "../exam-card/exam-card";
import examsList from './exams-data';

const listExamCards = (exam, index) => (
    <ExamCard
        key={index}
        head={exam.topic}
        type='Jee Mains'
        paper={exam.paper}
        from={exam.availableFrom}
        to={exam.endsOn}
    />
)

const ExamCardList = ({ activeTab, filter }) => {
    const [List, setList] = React.useState({
        jeeMains: examsList.jeeMains,
        jeeAdvance: examsList.jeeAdvance,
        custom: examsList.custom,
        neet: examsList.neet
    })
    const classes = examCardListStyles();

    return (
        <Box className={classes.examCardsContainer}>
            <Box className={classes.examCardsGrid}>
                {/*listing cards based on category like current exams, all exams*/}
                {
                    (filter === 'allExams') ? (
                        List[activeTab].map(listExamCards)
                    ) : List[activeTab].filter((exam) => {
                        return filter.includes(exam.status) ? exam : null
                    }).map(listExamCards)
                }
            </Box>
        </Box>
    )
};

export default ExamCardList;