import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Box, Link } from '@material-ui/core';

const useStyles = makeStyles({
    footerNav: {
        color: '#31456AB2',
        display: 'block',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '20px',
        position: 'absolute',
        left: '1px',
        top: '0px',
        right: '0px'
    }
});

const FooterNavLink = ({ label, myClassName}) => {
    const classes = useStyles();
    const dummy = (e) => e.preventDefault()
    return (
        <Box className={myClassName}>
            <Link className={classes.footerNav} href="#" onClick={dummy}>{label}</Link>
        </Box>
    )

}

export default FooterNavLink;