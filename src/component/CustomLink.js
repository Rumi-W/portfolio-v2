import React from 'react'
import { Link, Typography, Tooltip, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    card: {
        height: '40%',
        width: '80%',
        marginTop: theme.spacing(1)
    },
    title: {
        textTransform: 'uppercase'
    },
    content: {
        marginTop: theme.spacing(2)
    },
    link: {
        margin: theme.spacing(1),
        color: '#2867b2'
    },
    repoLink: {
        margin: 0,
        color: '#2867b2'
    },
    repoLinks: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        [theme.breakpoints.only('sm')]: {
            width: '100%'
        }
    },
    projectWrapLeft: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: theme.spacing(1),
        [theme.breakpoints.only('sm')]: {
            justifyContent: 'center',
            paddingRight: 0
        }
    },
    projectWrapRight: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: theme.spacing(1),
        [theme.breakpoints.only('sm')]: {
            justifyContent: 'center',
            paddingLeft: 0
        }
    }
}))

const CustomLink = ({ linkInfo, type }) => {
    const classes = useStyles()

    return (
        <div style={{ width: 'auto' }}>
            {type === 'link' ? (
                <Tooltip title={linkInfo.alt}>
                    <Link href={linkInfo.url} target="_blank" alt={linkInfo.alt} rel="noreferrer">
                        {linkInfo.icon ? (
                            <img src={linkInfo.icon} alt={linkInfo.alt} className={classes.link} />
                        ) : (
                            <Typography variant="h6" className={classes.link}>
                                {linkInfo.alt}
                            </Typography>
                        )}
                    </Link>
                </Tooltip>
            ) : (
                <Grid className={classes.repoLinks} container>
                    <Grid item xs={6} sm={12} md={6} className={classes.projectWrapLeft}>
                        <Tooltip title={linkInfo.proj}>
                            <Link href={linkInfo.projUrl} target="_blank" alt={linkInfo.proj} rel="noreferrer">
                                <Typography variant="subtitle1" component="div" className={classes.repoLink}>
                                    {linkInfo.proj}
                                </Typography>
                            </Link>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={6} sm={12} md={6} className={classes.projectWrapRight}>
                        <Tooltip title={linkInfo.repo}>
                            <Link href={linkInfo.repoUrl} target="_blank" alt={linkInfo.repo} rel="noreferrer">
                                <Typography variant="subtitle1" component="div" className={classes.repoLink}>
                                    {linkInfo.repo}
                                </Typography>
                            </Link>
                        </Tooltip>
                    </Grid>
                </Grid>
            )}
        </div>
    )
}

export default CustomLink
