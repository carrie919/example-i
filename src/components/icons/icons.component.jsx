import React from 'react';
import { Box } from '@material-ui/core';

import { ReactComponent as UserIcon } from '../../assets/user-icon.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter-icon.svg';
import { ReactComponent as FbIcon } from '../../assets/fb-icon.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/youtube-icon.svg';
import { ReactComponent as UpArrow } from '../../assets/arrow-up.svg';

import iconStyles from './icons.styles';

const iconMap = {
    userIcon: <UserIcon />,
    twitter: <TwitterIcon />,
    fb: <FbIcon />,
    youtube: <YoutubeIcon />,
    upArrow: <UpArrow />
}

const Icon = ({size, icon, myClassName, handleClick }) => {
    const measure = size === 'small' ? '40px' : '60px';
    const classes = iconStyles();
    
    return (
        <Box
            height={measure}
            width={measure}
            position='relative'
            className={`${myClassName} ${classes.logoShrink}`}
            onClick={handleClick}
        >
            <Box
                height={measure}
                width={measure}
                className={classes.logoShrink}
                position='absolute'
                left='0%'
                right='0%'
                top='0%'
                bottom='0%'
                bgcolor='#EFF2F4'
                boxShadow='8px 8px 20px #D1D9E6, -8px -8px 20px #FFFFFF'
                borderRadius='197px'
            >
                <Box className={classes[icon]}>
                    {
                        iconMap[icon]
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default Icon;