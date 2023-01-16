import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  errorWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: theme.palette.primary.main,
    // backgroundImage: 'url(https://images.unsplash.com/photo-1622313762347-3c09fe5f2719?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80)',
    color: theme.palette.primary.contrastText,
  },
}))

export { useStyles }
