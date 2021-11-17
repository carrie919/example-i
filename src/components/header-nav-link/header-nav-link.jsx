import React from "react";

import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    headerNav: {
        color: '#31456AB2',
        display: 'block',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '20px',
    }
});

const HeaderNavLink = ({ myClassName, label, rootPathName, toPath, width }) => {
    const classes = useStyles();

    return (
        <Box
            className={myClassName}
        >
            <Link to={toPath} className={classes.headerNav}>{label}</Link>
            {
                (label.toLowerCase() === rootPathName) ?
                    <Box
                        component='span'
                        height='3px'
                        width={width}
                        position='absolute'
                        bottom='-10px'
                        left='0px'
                        right='0px'
                        bgcolor='#08C5A7'
                        borderRadius='5px'
                    /> : null
            }
        </Box>
    )

}

export default HeaderNavLink