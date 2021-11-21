import React, { useState } from "react";
import { Box, Typography } from '@material-ui/core';

import examPageStyles from "./exams-page.styles";
import ExamCardList from "../../components/exam-card-list/exam-card-list";
import { navTabsList, subNavTabsList } from '../../utils/exam-page-nav-tabs.utils'


const ExamsPage = () => {
    const [activeTab, setActiveTab] = useState('jeeMains');
    const [filter, setFilter] = useState('allExams');
    const classes = examPageStyles();

    return (
        <Box className={classes.examPage}>
            <Box className={classes.introContainer}>
                <Typography variant='h1' className={classes.introHead}>
                    What do You Want to
                    <Typography variant='h1' component='span' className={classes.partOfHead}>Learn</Typography>
                    Today?
                </Typography>
                <Typography variant='body1' className={classes.introDes}>
                    Select course type to continue
                </Typography>
            </Box>

            {/* navTabsList subNavTabsList returns array of components */}
            <Box className={classes.navTabButtonsContainer}>
                {navTabsList(activeTab, setActiveTab)} 
            </Box>

            <Box className={classes.subNavTabButtonsContainer}>
                <Box className={classes.subNavTabButtonsGrid}>
                    { subNavTabsList(activeTab, filter, setFilter) }
                </Box>
            </Box>

            <Box component='span' className={classes.subNavTabUnderline} />

            <ExamCardList activeTab={activeTab} filter={filter}/>
        </Box>
    )
}

export default ExamsPage;