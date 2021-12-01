import { Box, withStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';

import customButtonsStyles from './custom-buttons.styles';

export const NavTabButtom = ({ myClassName, label, isActive, handleClick }) => {
    const classes = customButtonsStyles();
    const borderClassNames = isActive ? `${myClassName} ${classes.activeButtomBorder}` : myClassName
    return (
        <Box
            className={borderClassNames}
            onClick={handleClick}
        >
            <Box className={isActive ? classes.activeButtom : classes.defaultButton}>
                <Box component='span' className={classes.buttonContent}>{label}</Box>
            </Box>
        </Box>
    )
}

export const SubNavTabButton = ({myClassName, count, label, isActive, handleClick}) => {
    const classes = customButtonsStyles();
    return(
        <Box
            className={`${myClassName} ${classes.subNavDefault}`}
            onClick={handleClick}
        >
            {count}
            <Box
                component='span'
                color={
                    isActive ? '#31456A' : '#31456AB2'
                }
                fontStyle='normal'
            >{label}</Box>
        </Box>
    )
}

export const StartButton = ({myClassName, handleClick}) => {
    const classes = customButtonsStyles();
    
    return(
        <Box className={myClassName} onClick={handleClick}>
            <Box className={classes.startButton}>
                <Box component='span' className={classes.startButtonContent}>Start</Box>
            </Box>
        </Box>
    )
}

export const SignOutButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        padding: '0px',
        border: 'none',
        height: '24px',
        width: '100px',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        color: '#31456AB2',
        lineHeight: '20px',
        textAlign: 'end',
        letterSpacing: '0.0308642px',
        justifyContent: 'flex-end',

        '&:hover': {
            backgroundColor: 'white',
            boxShadow: 'none'
        },

        '&:focus': {
            backgroundColor: 'white',
            boxShadow: 'none'
        },

        '&:active': {
            backgroundColor: 'white',
            boxShadow: 'none'
        }

    }
})(Button);
