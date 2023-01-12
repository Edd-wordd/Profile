import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  infoWrapper: {
    padding: '2rem 0rem',
  },
  accordionWrapper: {
    padding: '2rem 0rem 8rem 0rem',
  },
  accordion: {
    width: theme.spacing(100),
    backgroundColor: theme.palette.defaultLight.main,
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(40),
    },
  },

}))

export { useStyles }
