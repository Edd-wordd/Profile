import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 450,
    height: 'auto',
    margin: '4rem 2.5rem 8rem 0rem',
    [theme.breakpoints.down('sm')]: {
      margin: '1rem 0rem',
    },
  },
  media: {
    height: 250,
  },
}))

export { useStyles }
