import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  calendlyBtn: {
    padding: '.5rem 6rem',
    backgroundColor: 'transparent',
    border: '1px solid lightgrey',
    borderRadius: '50px',
    width: '100%',
    margin: '.75rem 0 1rem 0',
    color: '#f5f5f5',
    '&:hover': {
      backgroundColor: 'lightgrey',
      cursor: 'pointer',
      color: '#89023e',
    },
  },
}))

export { useStyles }
