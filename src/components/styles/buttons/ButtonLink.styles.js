import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  btnWrapper: {
    margin: '2rem 0 5rem 0',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(15),
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      paddingRight: theme.spacing(0),
    },
  },
  button: {
    background: 'transparent',
    color: theme.palette.primary.main,
    border: 'none',
    boxShadow: 'none',
    textDecoration: 'underline',
    '&:hover': {
      background: 'transparent',
      color: theme.palette.primary.main,
      border: 'none',
      boxShadow: 'none',
      textDecoration: 'underline',
      fontSize: theme.spacing(2),
    },
  },
}))

export { useStyles }
