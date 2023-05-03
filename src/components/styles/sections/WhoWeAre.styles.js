import { styled } from '@mui/system'
const WhoWeAreCards = styled('div')(({ theme }) => ({
  width: theme.spacing(35),
  height: 'auto',
  minHeight: theme.spacing(40),
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('xs')]: {
    width: '100%',
  },
}))

export { WhoWeAreCards }
