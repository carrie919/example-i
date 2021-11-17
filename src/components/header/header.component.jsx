import { React, useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

// importing components
import HeaderNavLink from '../header-nav-link/header-nav-link';
import Icon from '../icons/icons.component';

// importing styles
import headerStyles from './header.styles';


const Header = () => {
    const [rootPathName, setRootPathName] = useState(null);
    const location = useLocation();
    const classes = headerStyles();

    useEffect(() => {
        const root = location.pathname.split('/')[1];
        setRootPathName(root);
    }, [location]);


    return (
        <Box
            height='100px'
            width='1440px'
            bgcolor='#E5E5E5'
            position='absolute'
            left='0%'
            right='0%'
            top='0%'
            bottom='95.6%'
            zIndex='99'
        >
            <Box
                height='100px'
                width='1440px'
                position='absolute'
                left='0%'
                right='0%'
                bottom='0%'
                bgcolor='#FAFAFA'
            >
                <Link to='/' className={classes.logoContainer}></Link>
                <HeaderNavLink
                    myClassName={classes.examsPosition}
                    label='Exams'
                    rootPathName={rootPathName}
                    toPath='/exams'
                    width='54px'
                />
                <HeaderNavLink
                    myClassName={classes.conceptsPosition}
                    label='Concepts'
                    rootPathName={rootPathName}
                    toPath='/concepts'
                    width='77px'
                />
                <Icon
                    myClassName={classes.userIconPosition}
                    icon='userIcon'
                    handleClick={() => alert('user Icon clicked')}
                />
            </Box>
        </Box >
    )
}

export default Header;