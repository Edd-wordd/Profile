import { createMuiTheme } from '@material-ui/core/styles'

const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#89023e', //Dark Pink
    },
    primary_100: {
      main: '#ffd9da', // Light Pink
    },
    primary_300: {
      main: '#1D2B64', // light blue grey (timber-wolf)
    },
    secondary: {
      main: '#e8eddf', // really light blue-green (alabaster)
    },
    text: {
      primary: '#282623', // dark gray
    },
    defaultDark: {
      main: '#080808', // dark black
      secondary: '#000000', // dark black
    },
    defaultLight: {
      main: '#f5f5f5', // white
    },

    charcoal: {
      main: '#333533', // charcoal color (jet)
    },
  },
})

export default mainTheme
