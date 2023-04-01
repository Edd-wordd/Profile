import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.defaultLight.main,
    paddingBottom: theme.spacing(5),
  },
  sectionTitle: {
    position: 'absolute',
    paddingBottom: theme.spacing(7),
    marginBottom: theme.spacing(6),
    background: theme.palette.secondary.main,
    color: theme.palette.defaultLight.main,
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(0),
      background: theme.palette.defaultLight.main,
      color: theme.palette.defaultDark.main,
    },
  },
  cardWrapper: {
    paddingTop: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(0),
    },
  },
  cards: {
    position: 'relative',
    width: '400px',
    margin: theme.spacing(1),
    height: 'auto',
    padding: '.75rem 1.5rem',
    backgroundColor: theme.palette.primary_300.main,
    color: theme.palette.charcoal.secondary,
    '&#card_0': {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(5),
      marginLeft: theme.spacing(9),
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(1),
      },
    },
    '&#card_1': {
      marginBottom: theme.spacing(22),
      marginTop: theme.spacing(5),
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(1),
      },
    },
    '&#card_2': {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(9),
      marginBottom: theme.spacing(5),
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(1),
      },
    },
    '&#card_3': {
      marginTop: theme.spacing(-20),
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(1),
      },
    },
    '&#card_4': {
      marginBottom: theme.spacing(10),
      marginTop: theme.spacing(5),
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(1),
      },
    },
    '&#card_5': {
      marginTop: theme.spacing(-20),
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(1),
      },
    },
  },
  icons: {
    width: '20%',
    height: 'auto',
    color: theme.palette.defaultLight.main,
  },
  cardTitle: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}))

export { useStyles }
