import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundColor: '#f5f5f5',
    paddingTop: '10rem',
  },
  container: {
    paddingBottom: '2rem',
  },
  h4: {
    fontSize: '2.125rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    marginTop: '1.5rem',
    textAlign: 'center',
  },
  h5: {
    fontSize: '1.65rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  h6: {
    fontSize: '1.35rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  p: {
    fontSize: '18px',
    letterSpacing: '0.4px',
    fontWeight: '400',
  },
}))

export { useStyles }
