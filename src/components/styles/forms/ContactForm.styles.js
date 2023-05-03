import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(https://images.unsplash.com/photo-1638444571531-42e04914a830?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80)`,
    width: '100%',
    height: 'auto',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
    padding: '12rem 0rem 5rem 0rem',
  },
  leftSideInfoWrapper: {
    width: '35%',
  },
  infoHeading: {
    color: theme.palette.defaultLight.main,
    fontSize: theme.spacing(6),
    letterSpacing: '.15rem',
    fontWeight: 600,
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing(3),
    },
  },
  infoSubTitle: {
    padding: '1.5rem 0rem 0rem 0rem',
    color: theme.palette.defaultLight.main,
    letterSpacing: '.15rem',
  },
  infoParagraph: {
    color: theme.palette.defaultLight.main,
    padding: '.25rem 5rem 1.5rem 0rem',
    lineHeight: '1.5rem',
    letterSpacing: '.15rem',
  },
  formPaper: {
    padding: theme.spacing(4),
    paddingTop: theme.spacing(6),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1.5),
      paddingBottom: theme.spacing(1),
      paddingTop: theme.spacing(6),
    },
  },
  form: {
    '& .MuiTextField-root': {
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(3.5),
      [theme.breakpoints.down('xs')]: {
        margin: theme.spacing(1),
      },
    },
  },
  textField: {
    marginBottom: theme.spacing(-1),
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
    },
  },
}))
export { useStyles }
