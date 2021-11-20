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
        <Box className={classes.footer}>
            <Box className={classes.footerContentOne}>
                <Box className={classes.logoContainer}>
                    <Link to='/' className={classes.logo}></Link>
                </Box>
                <Box className={classes.contentOneLinks}>
                    <FooterNavLink
                        myClassName={classes.aboutUsPosition}
                        label='About us'
                        width='74px'
                    />
                    <FooterNavLink
                        myClassName={classes.productPosition}
                        label='Product'
                        width='66px'
                    />
                    <FooterNavLink
                        myClassName={classes.contactPosition}
                        label='Contact'
                        width='65px'
                    />
                </Box>
                <SignOutButton
                    style={
                        {
                            position: 'absolute',
                            right: '0px',
                            top: '46px'
                        }
                    }
                    startIcon={<SignOutIcon className={classes.signOutIcon} />}
                    onClick={() => alert('sign out is clicked')}
                >
                    Sign Out
                </SignOutButton>
                <Box className={classes.contentDivider}/>
            </Box>
            <Box className={classes.footerContentTwo}>
                <Typography variant='subtitle2' className={classes.typo}>
                    © 2020 Onesaz. All rights reserved.
                </Typography>
                <Box className={classes.contentTwoIcons}>
                    <Icon
                        myClassName={classes.twitterPosition}
                        size='small'
                        icon='twitter'
                        handleClick={dummy}
                    />
                    <Icon
                        myClassName={classes.fbPosition}
                        size='small'
                        icon='fb'
                        handleClick={dummy}
                    />
                    <Icon
                        myClassName={classes.youtubePosition}
                        size='small'
                        icon='youtube'
                        handleClick={dummy}
                    />
                </Box>
            </Box>
            <Icon myClassName={classes.upArrowPosition} icon='upArrow'  handleClick={dummy} />
        </Box >
    )
}

export default Footer;