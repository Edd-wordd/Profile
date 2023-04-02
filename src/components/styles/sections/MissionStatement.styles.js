import { styled } from '@mui/system'

const Background = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary_100.secondary,
  padding: '2.5rem 0rem',
}))

export { Background }
