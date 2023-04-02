import { styled } from '@mui/system'

const CustomButton = styled('button')(({ theme }) => ({
  background: 'transparent',
  color: theme.palette.primary.main,
  border: 'none',
  boxShadow: 'none',
  textDecoration: 'underline',
  '&:hover': {
    background: 'transparent',
    color: theme.palette.primary.main,
    border: 'none',
    boxShadow: 'none',
    textDecoration: 'underline',
    fontSize: theme.spacing(2),
  },
}))

const BtnWrapper = styled('div')(({ theme }) => ({
  margin: '2rem 0 5rem 0',
  display: 'flex',
  justifyContent: 'flex-end',
  paddingRight: theme.spacing(15),
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    justifyContent: 'center',
    paddingRight: theme.spacing(0),
  },
}))

export { CustomButton, BtnWrapper }
