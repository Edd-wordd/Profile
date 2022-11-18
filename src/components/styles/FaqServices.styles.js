import { makeStyles } from '@material-ui/core'
import mainTheme from '../../theme'

const useStyles = makeStyles((theme) => ({
  root: {},
  accordion: {
    width: '600px',
    backgroundColor: mainTheme.palette.defaultLight.main,
    [theme.breakpoints.down('sm')]: {
      width: '375px',
    },
  },
  mainInfo: {
    padding: '2rem 0rem',
  },
  questionWrapper: {
    padding: '2rem 0rem 8rem 0rem',
  },
}))

export { useStyles }
