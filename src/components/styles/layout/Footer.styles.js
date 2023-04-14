import { styled } from '@mui/system'

const FooterBackground = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.defaultLight.main,
  width: '100%',
  height: 'auto',
  paddingTop: '5rem',
}))

const SectionCards = styled('div')(({ theme }) => ({
  width: '20rem',
  minHeight: '13rem',
  backgroundColor: 'transparent !important',
  color: `${theme.palette.defaultLight.main} !important`,
  fontWeight: 200,
  boxShadow: 'none !important',
  [theme.breakpoints.down('xs')]: {
    margin: '2rem 0 !important',
  },
}))

const FooterMainLogo = styled('div')(({ theme }) => ({
  width: '16rem',
  height: 'auto',
  [theme.breakpoints.down('xs')]: {
    width: '100%',
    height: 'auto',
  },
  '& img': {
    maxWidth: '100%',
    height: 'auto',
  },
}))

const FooterLine = styled('div')(({ theme }) => ({
  marginTop: '1.2rem',
  marginRight: '.75rem',
  marginBottom: '1rem',
  width: '90%',
  height: '1px',
  background: 'linear-gradient(45deg, #89023e 30%, #c72c61 90%)',
}))
export { FooterBackground, SectionCards, FooterMainLogo, FooterLine }
