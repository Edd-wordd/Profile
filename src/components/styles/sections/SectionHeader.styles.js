import { styled } from '@mui/system'

const TitleWrapper = styled('div')(({ theme }) => ({
  marginTop: '3rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('xs')]: {
    paddingBottom: theme.spacing(6),
    paddingTop: theme.spacing(6),
  },
}))

const LeftSideLine = styled('div')(({ theme }) => ({
  marginRight: '.75rem',
  width: '25%',
  height: '1px',
  background: 'linear-gradient(45deg, #89023e 30%, #c72c61 90%)',
  [theme.breakpoints.down('xs')]: {
    display: 'none',
  },
}))

const Diamond = styled('div')(({ theme }) => ({
  width: '20px',
  height: '20px',
  border: '4px solid #343a40',
  transform: 'rotate(45deg)',
  background: 'linear-gradient(45deg, #89023e 30%, #c72c61 90%)',
  [theme.breakpoints.down('xs')]: {
    display: 'none',
  },
}))

const RightSideLine = styled('div')(({ theme }) => ({
  marginLeft: '.75rem',
  width: '25%',
  height: '1px',
  background: 'linear-gradient(45deg, #89023e 30%, #c72c61 90%)\n',
  [theme.breakpoints.down('xs')]: {
    display: 'none',
  },
}))

export { TitleWrapper, LeftSideLine, Diamond, RightSideLine }
