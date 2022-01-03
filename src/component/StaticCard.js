import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SkillCard from './SkillCard'

const useStyles = makeStyles((theme) => ({
    root: {
        height: 'auto',
        padding: theme.spacing(3, 0)
    },
    card: {
        position: 'relative',
        textTransform: 'none',
        width: '100%',
        height: '100%',
        background: 'rgba(255, 255, 255, 0.2)'
    },
    front: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.primary.dark
    },
    icon: {
        textAlign: 'center'
    }
}))
const StaticCard = ({ contents }) => {
    const classes = useStyles()
    const backSide = contents.back.map((item, i) => (
        <SkillCard key={i} title={item.title} content={item.content} links={item.links} linksRepo={item.linksRepo} />
    ))

    return (
        <Paper elevation={0} className={classes.root}>
            <Paper elevation={0} className={classes.card}>
                <Paper elevation={0} className={classes.front} style={{ display: 'flex' }}>
                    <div>
                        <Typography align="center" variant="h3">
                            {contents.front.title}
                        </Typography>
                        <div className={classes.icon}>{contents.front.iconSm}</div>
                    </div>
                    {backSide}
                </Paper>
            </Paper>
        </Paper>
    )
}

export default StaticCard
