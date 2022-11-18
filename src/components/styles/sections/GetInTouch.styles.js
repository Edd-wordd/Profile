import { makeStyles } from '@material-ui/core'
import mainTheme from '../../../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg,#CC95C0,#1FA2FF  , #12D8FA , #A6FFCB )',
    color: mainTheme.palette.defaultLight,
    padding: theme.spacing(1),
  },
  h1: {
    textAlign: 'left',
    lineHeight: theme.spacing(0.15),
    letterSpacing: theme.spacing(0.25),
    color: mainTheme.palette.text.primary,
  },
  paragraph: {
    paddingTop: theme.spacing(3),
    color: mainTheme.palette.text.primary,
    fontStyle: 'italic',
    alignSelf: 'flex-start',
  },
  logo: {
    maxWidth: '75%',
    height: 'auto',
  },
}))

export { useStyles }
