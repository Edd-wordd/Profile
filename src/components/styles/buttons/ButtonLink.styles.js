import { makeStyles } from '@material-ui/core'
import mainTheme from '../../../theme'

const useStyles = makeStyles((theme) => ({
  btnWrapper: {
    margin: '2rem 0 5rem 0',
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: mainTheme.palette.defaultLight.main,
  },
}))

export { useStyles }
