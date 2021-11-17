import React, { useState } from "react";
import { Box, Typography } from '@material-ui/core';

import { NavTabButtom, SubNavTabButton } from "../../components/custom-buttons/custom-buttons";
import ExamCard from "../../components/exam-card/exam-card";

import examPageStyles from "./exams-page.styles";
import examsList from './exams-data.js';

const ExamsPage = () => {
    const [List, setList] = useState({
        jeeMains: examsList.jeeMains,
        jeeAdvance: examsList.jeeAdvance,
        custom: examsList.custom,
        neet: examsList.neet
    })
    const [activeTab, setActiveTab] = useState('jeeMains');
    const [filter, setFilter] = useState('allExams');

    const classes = examPageStyles();

    const myTabs = [
        {tabName: 'jeeMains', tabLabel: 'Jee Mains'},
        {tabName: 'jeeAdvance', tabLabel: 'Jee Advance'},
        {tabName: 'custom', tabLabel: 'Custom'},
        {tabName: 'neet', tabLabel: 'Neet'},
    ]

    const subTabs = [
        {tabName: 'allExams', tabLabel: 'All Exams', },
        {tabName: 'previousExams', tabLabel: 'Previous Exams'},
        {tabName: 'currentExams', tabLabel: 'Current Exams'},
        {tabName: 'upcomingExams', tabLabel: 'Upcoming Exams'},
    ]

    const listExamCards = (exam, index) => {
        return <Box
            key={exam.id}
            height='353px'
            width='300px'
            position='absolute'
            left={(index % 3 === 0) ? '250px' : (index % 3 === 1 ? '569px' : '889px')}
            top={`${601 + ((index - (index % 3))/ 3) * 383}px`}
        >
            <ExamCard
                head={exam.topic}
                type='Jee Mains'
                paper={exam.paper}
                from={exam.availableFrom}
                to={exam.endsOn}
            />
        </Box>
    }

    const examCount = (subTabName) => subTabName === 'allExams' ?  List[activeTab].length : 
        List[activeTab].reduce(
            ((initial, exam) => subTabName.includes(exam.status) ? initial + 1 : initial),0)

    return (
        <Box
            height='2142px'
            width='1440px'
            bgcolor='#ECF0F3CC'
            position='absolute'
            top='0%'
            right='0%'
            bottom='3.96%'
            left='0%'
            zIndex='1'
        >
            <Typography variant='h1' className={classes.introHead}>
                What do You Want to
                <Typography variant='h1' component='span' className={classes.partOfHead}>Learn</Typography>
                Today?
            </Typography>
            <Typography variant='body1' className={classes.introDes}>
                Select course type to continue
            </Typography>

            {
                myTabs.map((tab, index) =>( 
                    <NavTabButtom
                        key={index}
                        myClassName={classes[tab.tabName]}
                        label={tab.tabLabel}
                        isActive={
                            activeTab === tab.tabName ? true : false
                        }
                        handleClick={() => setActiveTab(tab.tabName)}
                    />
                ))
            }
            {
                subTabs.map((tab, index) =>( 
                    <SubNavTabButton
                        key={index}
                        myClassName={classes[tab.tabName]}
                        label={tab.tabLabel}
                        count={examCount(tab.tabName)}
                        isActive={
                            filter === tab.tabName ? true : false
                        }
                        handleClick={() => setFilter(tab.tabName)}
                    />
                ))
            }

            <Box
                component='span'
                width='940px'
                position='absolute'
                left='17.36%'
                top='24.25%'
                bottom='75.75%'
                border='2px solid #D1D9E6'
            />

            {
                (filter === 'allExams') ? (
                    List[activeTab].map(listExamCards)
                ) : List[activeTab].filter((exam) => {
                    return filter.includes(exam.status) ? exam : null
                }).map(listExamCards)
            }


        </Box>
    )
}

export default ExamsPage;