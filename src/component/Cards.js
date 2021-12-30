import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import FlipCard from './FlipCard'
import StaticCard from './StaticCard'
import { contents } from './cardContentsConfig'

const useStyles = makeStyles(theme => ({
  root: {
    height: '99%',
    width: '100%',
    background: 'transparent',
    [theme.breakpoints.down('md')]: {
      height: '90%'
    },
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
      overflow: 'scroll',
      marginTop: theme.spacing(2),
      background: 'transparent'
    }
  },
  container: {
    background: 'rgba(255, 255, 255, 0.3)',
    height: '100%',
    flexGrow: 1,
    padding: theme.spacing(2, 4),
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      background: 'transparent'
    },
    [theme.breakpoints.down('xs')]: {
      background: 'transparent',
      height: 'atuo'
    }
  },
  item: {
    height: '100%',
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2)
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: 0
    }
  }
}))

const Cards = () => {
  const classes = useStyles()
  const isPhone = useMediaQuery({
    query: '(max-width: 599px)'
  })

  return (
    <Paper elavation={4} className={classes.root}>
      <Grid container className={classes.container} spacing={isPhone ? 1 : 2}>
        {contents.map((item, i) => (
          <Grid key={`skills-${i}`} item className={classes.item} xs={12} sm={6} md={6}>
            {!isPhone ? <FlipCard contents={item} /> : <StaticCard contents={item} />}
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}

export default Cards
