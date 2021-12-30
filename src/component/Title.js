import React from 'react'
import { Typography, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  div: {
    margin: 'auto'
  },
  small: {
    fontWeight: '500',
    color: 'white',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    }
  },
  large: {
    fontWeight: '500',
    color: 'white',
    [theme.breakpoints.down('xs')]: {
      fontSize: '32px'
    }
  }
}))

const Title = () => {
  const classes = useStyles()

  return (
    <div className={classes.div}>
      <Hidden xsDown>
        <Typography variant="h5" className={classes.small}>
          Hi, I am
        </Typography>
      </Hidden>
      <Typography variant="h1" className={classes.large}>
        Harumi Warner
      </Typography>
      <Typography variant="h5" className={classes.small}>
        Web Developer
      </Typography>
    </div>
  )
}
export default Title
