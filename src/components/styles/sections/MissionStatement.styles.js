import { makeStyles } from '@material-ui/core/styles'
import mainTheme from "../../../theme";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: mainTheme.palette.primary_100.secondary,
    padding: '2.5rem 0rem',
  },
  wrapper: {
    padding: '2rem 0rem',
  },
  icons: {
    width: theme.spacing(5),
    height: 'auto',
    color: mainTheme.palette.charcoal.secondary,
  },
  missionStatement: {
    lineHeight: theme.spacing(0.25),
    letterSpacing: theme.spacing(0.1),
  },
}))

export { useStyles }
