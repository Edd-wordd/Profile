import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.spacing(50),
    height: 'auto',
    margin: '4rem 2.5rem 8rem 0rem',
    [theme.breakpoints.down('sm')]: {
      margin: '1rem 0rem',
    },
  },
  media: {
    height: theme.spacing(30),
  },
}))

export { useStyles }
