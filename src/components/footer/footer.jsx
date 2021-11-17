import { React } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

// importing icon
import { ReactComponent as SignOutIcon } from '../../assets/sign-out-icon.svg';

//importing components
import FooterNavLink from '../footer-nav-link/footer-nav-link';
import { SignOutButton } from '../custom-buttons/custom-buttons';
import Icon from '../icons/icons.component';

// importing styles
import footerStyles from './footer.styles';


const Footer = () => {
    const classes = footerStyles();
    const dummy = () => alert('footer icons clecked');

    return (
        <Box
            height='200px'
            width='1440px'
            bgcolor='#E5E5E5'
            position='absolute'
            left='0%'
            right='0%'
            top='91.2%'
            bottom='0%'
            zIndex='3'
        >
            <Box
                height='100px'
                width='1440px'
                position='absolute'
                top='0%'
                left='0%'
                right='0%'
                bgcolor='#FAFAFA'
            >
                <Link to='/' className={classes.logoContainer}></Link>
                <FooterNavLink myClassName={classes.aboutUsPosition} label='About us' width='76px'/>
                <FooterNavLink myClassName={classes.productPosition} label='Product' width='66px' />
                <FooterNavLink myClassName={classes.contactPosition} label='Contact' width='65px' />
                <SignOutButton
                    startIcon={<SignOutIcon className={classes.signOutIcon} />}
                    onClick={() => alert('sign out is clicked')}
                >
                    Sign Out
                </SignOutButton>
            </Box>
            <Box
                component='span'
                height='2px'
                width='940px'
                position='absolute'
                left='250px'
                top='99px'
                bgcolor='#EFF2F4'
                borderRadius='5px'
            />
            <Box
                height='100px'
                width='1440px'
                position='absolute'
                bottom='0%'
                left='0%'
                right='0%'
                bgcolor='#FAFAFA'
            >
                <Typography variant='subtitle2' className={classes.typo}>
                    © 2020 Onesaz. All rights reserved.
                </Typography>
                <Icon myClassName={classes.twitterPosition} size='small' icon='twitter' handleClick={dummy}/>
                <Icon myClassName={classes.fbPosition} size='small' icon='fb'  handleClick={dummy} />
                <Icon myClassName={classes.youtubePosition} size='small' icon='youtube' handleClick={dummy}/>
                <Icon myClassName={classes.upArrowPosition} icon='upArrow'  handleClick={dummy} />
            </Box>
        </Box >
    )
}

export default Footer;