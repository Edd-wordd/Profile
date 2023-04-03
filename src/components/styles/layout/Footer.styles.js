import { styled } from '@mui/system'

const FooterBackground = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.defaultLight.main,
  width: '100%',
  height: 'auto',
  paddingTop: '3rem',
  overflowX: 'hidden',
}))

const SectionCards = styled('div')(({ theme }) => ({
  width: '20rem',
  minHeight: '13rem',
  padding: '5rem 0 3rem 0',
  backgroundColor: 'transparent !important',
  color: `${theme.palette.defaultLight.main} !important`,
  fontWeight: 200,
  boxShadow: 'none !important',
  [theme.breakpoints.down('xs')]: {
    margin: '2rem 0 !important',
  },
}))

const FooterButton = styled('button')(({ theme }) => ({
  color: theme.palette.defaultLight.main,
  marginTop: '1rem',
  '&:hover': {
    opacity: '.8',
  },
}))

const FooterMainLogo = styled('div')(({ theme }) => ({
  width: '16rem',
  height: 'auto',
  // paddingTop: '-3rem',
  [theme.breakpoints.down('xs')]: {
    width: '100%',
    height: 'auto',
  },
  '& img': {
    maxWidth: '100%',
    height: 'auto',
  },
}))

const FooterLink = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.defaultLight.main,
  fontWeight: 'lighter',
  letterSpacing: '1px',
}))

const FooterDiamond = styled('div')(({ theme }) => ({
  width: '10px',
  height: '10px',
  border: '2px solid #343a40',
  transform: 'rotate(45deg)',
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  margin: '.3rem 1rem',
}))

const FooterLine = styled('div')(({ theme }) => ({
  marginTop: '1.2rem',
  marginRight: '.75rem',
  marginBottom: '1rem',
  width: '90%',
  height: '1px',
  background: 'linear-gradient(45deg, #89023e 30%, #c72c61 90%)',
}))
export {
  FooterBackground,
  SectionCards,
  FooterButton,
  FooterMainLogo,
  FooterLink,
  FooterDiamond,
  FooterLine,
}
