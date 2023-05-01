import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  calendlyBtn: {
    padding: '.5rem 6rem',
    backgroundColor: 'transparent',
    border: '1px solid lightgrey',
    borderRadius: '50px',
    width: '100%',
    margin: '.5rem 0 1rem 0',
    color: 'gray',
    '&:hover': {
      backgroundColor: 'lightgrey',
      cursor: 'pointer',
    },
  },
}))

export { useStyles }
