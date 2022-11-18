import { makeStyles } from '@material-ui/core/styles'
import mainTheme from '../../../theme'

const useStyles = makeStyles((theme) => ({
  titleWrapper: {
    marginTop: theme.spacing(6),
  },
  title: {
    paddingBottom: theme.spacing(2),
    color: mainTheme.palette.charcoal.main,
  },
  subTitle: { marginTop: theme.spacing(2) },
  wrapper: {
    backgroundImage: `linear-gradient(45deg,#f4f1fa  30%,#fff 90%)`,
    padding: '5rem 0rem',
    [theme.breakpoints.down('md')]: {
      padding: '2rem 0rem',
    },
    '&#wrapper_0': {
      backgroundImage: `linear-gradient(45deg,#fff 30%,#f4f1fa 90%)`,
    },
    '&#wrapper_2': {
      backgroundImage: `linear-gradient(45deg,#fff 30%,#f4f1fa 90%)`,
    },
    '&#wrapper_4': {
      backgroundImage: `linear-gradient(45deg,#fff 30%,#f4f1fa 90%)`,
    },
  },
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
  btn: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: mainTheme.palette.defaultLight.main,
    border: 'none',
  },
  img: {
    width: '600px',
    height: 'auto',
    borderRadius: '1%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  servicePara: {
    width: '700px',
    height: 'auto',
    color: '#808080', //light grey
    letterSpacing: theme.spacing(0.25),
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  links: {
    textDecoration: 'none',
  },
}))

export { useStyles }
