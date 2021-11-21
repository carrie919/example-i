import examsList from "../components/exam-card-list/exams-data";
import { NavTabButtom, SubNavTabButton } from "../components/custom-buttons/custom-buttons";
import examPageNavTabsStyles from "../pages/exams-page/exam-page-nav-tabs.styles";

const myTabs = [
    { tabName: 'jeeMains', tabLabel: 'Jee Mains' },
    { tabName: 'jeeAdvance', tabLabel: 'Jee Advance' },
    { tabName: 'custom', tabLabel: 'Custom' },
    { tabName: 'neet', tabLabel: 'Neet' },
];

const subTabs = [
    { tabName: 'allExams', tabLabel: 'All Exams', },
    { tabName: 'previousExams', tabLabel: 'Previous Exams' },
    { tabName: 'currentExams', tabLabel: 'Current Exams' },
    { tabName: 'upcomingExams', tabLabel: 'Upcoming Exams' },
];

export const navTabsList = (activeTab, setActiveTab) => {
    const classes = examPageNavTabsStyles();
    return(
        myTabs.map((tab, index) => (
            <NavTabButtom
                key={index}
                myClassName={classes.examNavTabButton}
                label={tab.tabLabel}
                isActive={
                    activeTab === tab.tabName ? true : false
                }
                handleClick={() => setActiveTab(tab.tabName)}
            />
        ))
    )
}

export const subNavTabsList = (activeTab, filter, setFilter) => {

    const examCount = (subTabName) => subTabName === 'allExams' ? examsList[activeTab].length :
        examsList[activeTab].reduce(
            ((initial, exam) => subTabName.includes(exam.status) ? initial + 1 : initial), 0)

    const classes = examPageNavTabsStyles();
    return (
        subTabs.map((tab, index) => (
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
    )
}