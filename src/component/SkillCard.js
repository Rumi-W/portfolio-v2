import React from 'react'
import { Card, CardContent, Typography, Fade } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CustomLink from './CustomLink'

const useStyles = makeStyles((theme) => ({
    card: {
        height: '40%',
        width: '80%',

        marginTop: theme.spacing(1),
        overflow: 'auto',
        [theme.breakpoints.only('xs')]: {
            width: '90%',
            border: '1px solid #ccc'
        }
    },
    title: {
        textTransform: 'uppercase'
    },
    content: {
        marginTop: theme.spacing(1)
    },
    links: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))

const SkillCard = ({ title, content, links, linksRepo }) => {
    const classes = useStyles()

    const linksSection = links.map((link, i) => <CustomLink key={link.id} linkInfo={link} type="link" />)
    const repoLinksSection = linksRepo.map((link, i) => <CustomLink key={link.id} linkInfo={link} type="repo" />)

    return (
        <Card className={classes.card}>
            <Fade in timeout={{ enter: 3000 }}>
                <CardContent>
                    <Typography variant="body1" color="textSecondary" className={classes.title}>
                        {title}
                    </Typography>
                    <Typography variant="body1" component="div" color="textPrimary" className={classes.content}>
                        {content}
                    </Typography>

                    {linksRepo.length > 0 && repoLinksSection}
                    {links.length > 0 && <div className={classes.links}>{linksSection}</div>}
                </CardContent>
            </Fade>
        </Card>
    )
}

export default SkillCard
