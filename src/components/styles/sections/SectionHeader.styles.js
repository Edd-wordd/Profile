import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  titleWrapper: {
    marginTop: '3rem',
    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(6),
      paddingTop: theme.spacing(6),
    },
  },
  title: {
    paddingBottom: '1rem',
  },
  subTitle: { marginTop: '1rem' },
  lineL: {
    marginTop: '.8rem',
    marginRight: '.75rem',
    width: '250px',
    height: '1px',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    [theme.breakpoints.down('xs')]: {
      marginTop: '.5rem',
      marginRight: '.75rem',
      width: '135px',
    },
  },
  lineR: {
    marginTop: '.8rem',
    marginLeft: '.75rem',
    width: '250px',
    height: '1px',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    [theme.breakpoints.down('xs')]: {
      marginTop: '.5rem',
      marginLeft: '.75rem',
      width: '135px',
    },
  },
  diamond: {
    width: '20px',
    height: '20px',
    border: '4px solid #343a40',
    transform: 'rotate(45deg)',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    [theme.breakpoints.down('xs')]: {
      width: '15px',
      height: '15px',
      border: '2px solid #343a40',
    },
  },
}))

export { useStyles }
