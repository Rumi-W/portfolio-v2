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
    project: {
        [theme.breakpoints.only('sm')]: {
            paddingBottom: theme.spacing(1)
        }
    }
}))

const CustomLink = ({ linkInfo, type }) => {
    const classes = useStyles()

    return (
        <div>
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
                <Grid direction="row" justifyContent="center" alignItems="center" className={classes.project} container>
                    <Grid item xs={4} sm={12} md={5} lg={4}>
                        <Typography variant="subtitle1" component="div" align="center">
                            {linkInfo.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={3} md={2}>
                        <Tooltip title={linkInfo.proj}>
                            <Link href={linkInfo.projUrl} target="_blank" alt={linkInfo.proj} rel="noreferrer">
                                <Typography variant="subtitle1" component="div" className={classes.repoLink}>
                                    {linkInfo.proj}
                                </Typography>
                            </Link>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={3} sm={3} md={2}>
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
