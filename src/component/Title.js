import React from 'react'
import { Typography, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    div: {
        margin: 'auto'
    },
    intro: {
        fontWeight: '500',
        color: 'white',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center'
        },
        '@media (max-width: 900px) and (orientation: landscape)': {
            display: 'none'
        }
    },
    name: {
        fontWeight: '500',
        color: 'white',
        [theme.breakpoints.down('xs')]: {
            fontSize: '32px',
            color: theme.palette.primary.dark
        },
        '@media (max-width: 900px) and (orientation: landscape)': {
            fontSize: '2rem'
        }
    },
    info: {
        fontWeight: '500',
        color: 'white',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center'
        }
    }
}))

const Title = () => {
    const classes = useStyles()

    return (
        <div className={classes.div}>
            <Hidden xsDown>
                <Typography variant="h5" className={classes.intro}>
                    Hi, I am
                </Typography>
            </Hidden>
            <Typography variant="h1" className={classes.name}>
                Harumi Warner
            </Typography>
            <Typography variant="h5" className={classes.info}>
                Web Developer
            </Typography>
        </div>
    )
}
export default Title
