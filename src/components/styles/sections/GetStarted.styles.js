import { styled } from '@mui/system'

// A container for the "Get Started" section
const GetStartedBackground = styled('div')(({ theme }) => ({
  paddingBottom: '3rem',
  backgroundColor: '#f4f1fa',
}))

// A card displaying one step of the "Get Started" process
const Card = styled('div')(({ theme }) => ({
  width: theme.spacing(37),
  minHeight: theme.spacing(30),
  border: 'none',
  padding: theme.spacing(4),
  margin: '0rem 1.5rem 0rem 1rem',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('xs')]: {
    width: '100%',
  },
}))

// A dotted line used to separate steps in the "Get Started" section
const DottedLine = styled('div')(({ theme }) => ({
  width: theme.spacing(23),
  padding: '0rem 5rem',
  margin: '0rem .5rem',
  borderBottom: '3px dotted #c0c0c0',
  [theme.breakpoints.down('xl')]: {
    display: 'none',
  },
}))

// An icon wrapper used to display icons in the "Get Started" section
const IconWrapper = styled('div')(({ theme }) => ({
  width: theme.spacing(3),
  height: 'auto',
  color: theme.palette.charcoal.secondary,
  [theme.breakpoints.down('xl')]: {
    display: 'none',
  },
}))

export { DottedLine, Card, IconWrapper, GetStartedBackground }
