import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.default, //component background
    fontSize: '18px',
    lineHeight: '1.5',
    letterSpacing: '0.4px',
    fontWeight: 400,
    fontFamily: 'Roboto Condensed',
    color: ' #282623',
  },
  container: {
    fontFamily: 'Roboto Condensed',
    paddingBottom: '2rem',
  },
  h4: {
    fontSize: '2.125rem',
    fontWeight: 'bold',
    fontFamily: 'Roboto Condensed',
    marginBottom: '1rem',
    marginTop: '1.5rem',
  },
  h5: {
    fontSize: '1.65rem',
    fontWeight: 'bold',
    fontFamily: 'Roboto Condensed',
    marginBottom: '1rem',
  },
  h6: {
    fontSize: '1.35rem',
    fontWeight: 'bold',
    fontFamily: 'Roboto Condensed',
    marginBottom: '1rem',
  },
  p: {
    fontSize: '18px',
    letterSpacing: '0.4px',
    fontWeight: '400',
    fontFamily: 'Roboto Condensed',
  },
  bg: {
    backgroundColor: '#f5f5f5',
  },
}))

export { useStyles }
