import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
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
