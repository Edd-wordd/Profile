import { makeStyles } from '@material-ui/core'
import mainTheme from '../../../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: mainTheme.palette.defaultLight.main,
    paddingBottom: theme.spacing(5),
  },
  sectionTitle: {
    paddingBottom: theme.spacing(7),
    marginBottom: theme.spacing(6),
    background: '#0f0c29', //dark purple color
    color: mainTheme.palette.defaultLight.main,
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(0),
      background: mainTheme.palette.defaultLight.main,
      color: mainTheme.palette.defaultDark.main,
    },
  },
  boxWrapper: {
    paddingTop: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(0),
    },
  },
  boxes: {
    width: '400px',
    margin: theme.spacing(1),
    height: 'auto',
    padding: '.75rem 1.5rem',
    backgroundColor: '#ded5ef', // Light purple color
    // color: mainTheme.palette.defaultLight.main,
    color: '#818181',

    '&#box_0': {
      marginBottom: theme.spacing(-8),
      marginTop: theme.spacing(10),
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(1),
      },
    },
    '&#box_1': {
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(1),
      },
    },
    '&#box_2': {
      marginBottom: theme.spacing(-8),
      marginTop: theme.spacing(10),
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(1),
      },
    },
    '&#boxes_0': {
      marginTop: theme.spacing(-14),
      marginBottom: theme.spacing(16),
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(1),
      },
    },
    '&#boxes_1': {
      marginBottom: theme.spacing(5),
      marginTop: theme.spacing(-5),
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(1),
      },
    },
    '&#boxes_2': {
      marginTop: theme.spacing(-14),
      marginBottom: theme.spacing(16),
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(1),
      },
    },
  },
  icons: {
    width: '20%',
    height: 'auto',
    color: mainTheme.palette.defaultLight.main,
  },
  boxTitle: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}))

export { useStyles }
