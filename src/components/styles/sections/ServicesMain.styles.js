import { makeStyles } from '@material-ui/core/styles'
import mainTheme from "../../../theme";
const useStyles = makeStyles((theme) => ({
  paragraphWrapper: { margin: '3rem 0' },
  paraInfo: {
    letterSpacing: theme.spacing(0.15),
    lineHeight: theme.spacing(0.25),
  },
  boxes: {
    width: theme.spacing(75),
    height: 'auto',
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  coreValue: { color: mainTheme.palette.charcoal.secondary }, // light grey color
}))

export { useStyles }
