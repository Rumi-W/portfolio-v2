import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import { Paper, Typography, Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SkillCard from './SkillCard'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%'
    },
    card: {
        position: 'relative',
        textTransform: 'none',
        width: '100%',
        height: '100%',
        transition: 'transform .5s ease',
        WebkitTransition: 'transform .5s ease',
        transformStyle: 'preserve-3d',
        WebkitTransformStyle: 'preserve-3d',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden'
    },
    cardFlipped: {
        position: 'relative',
        textTransform: 'none',
        width: '100%',
        height: '100%',
        transformStyle: 'preserve-3d',
        WebkitTransformStyle: 'preserve-3d',
        transition: 'transform .5s ease',
        WebkitTransition: 'transform .5s ease',
        transform: 'rotateY(180deg)',
        WebkitTransform: 'rotateY(180deg)',
        background: 'rgba(255, 255, 255, 0.2)'
    },
    cardFace: {
        background: 'rgb(239, 239, 239)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden'
    },
    front: {
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.primary.dark
    },
    back: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'rotateY(180deg)',
        WebkitTransform: 'rotateY(180deg)'
    },
    icon: {
        textAlign: 'center'
    }
}))
const FlipCard = ({ contents }) => {
    useEffect(() => {
        setTimeout(() => {
            setIsFlipped(true)
        }, 500)
    }, [])

    const classes = useStyles()
    const [isFlipped, setIsFlipped] = useState(false)
    const cardClass = isFlipped ? classes.cardFlipped : classes.card

    const clicked = () => {
        setIsFlipped((prev) => !prev)
    }

    const backSide = contents.back.map((item, i) => (
        <SkillCard key={i} title={item.title} content={item.content} links={item.links} linksRepo={item.linksRepo} />
    ))

    return (
        <Paper elevation={0} className={classes.root}>
            <Paper elevation={0} className={cardClass} onClick={clicked}>
                <Paper elevation={0} className={classnames(classes.cardFace, classes.front)}>
                    <Tooltip title={`Click to see ${contents.front.title}`}>
                        <div>
                            <Typography align="center" variant="h3">
                                {contents.front.title}
                            </Typography>
                            <div className={classes.icon}>{contents.front.icon}</div>
                        </div>
                    </Tooltip>
                </Paper>
                {isFlipped ? (
                    <Paper
                        elevation={0}
                        className={classnames(classes.cardFace, classes.back)}
                        style={{ display: 'flex' }}>
                        {backSide}
                    </Paper>
                ) : null}
            </Paper>
        </Paper>
    )
}

export default FlipCard
