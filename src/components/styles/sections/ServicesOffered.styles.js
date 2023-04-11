import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(https://images.unsplash.com/photo-1625014053925-88bef4805a76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80)`,
    width: '100%',
    height: 'auto',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
  },
  titleWrapper: {
    marginTop: theme.spacing(6),
  },
  title: {
    paddingBottom: theme.spacing(2),
    color: theme.palette.charcoal.main,
  },
  subTitle: {
    marginTop: theme.spacing(2),
  },
  wrapper: {
    padding: '5rem 0rem',

    [theme.breakpoints.down('md')]: {
      padding: '2rem 0rem',
    },
  },
  wrapperBg: (index) => ({
    backgroundImage: `linear-gradient(45deg, ${index % 2 === 0 ? '#f4f1fa' : '#fff'} 30%, ${
      index % 2 === 0 ? '#fff' : '#f4f1fa'
    } 90%)`,
  }),
  line: {
    width: '350px',
    height: '1px',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  titles: {
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(6),
    },
  },
  btnWrapper: {
    padding: theme.spacing(6),
  },
  img: {
    width: '600px',
    height: 'auto',
    borderRadius: '5px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  servicePara: {
    width: '700px',
    height: 'auto',
    color: theme.palette.charcoal.secondary,
    letterSpacing: theme.spacing(0.2),
    lineHeight: '1.5rem',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  links: {
    textDecoration: 'none',
  },
}))

export { useStyles }
