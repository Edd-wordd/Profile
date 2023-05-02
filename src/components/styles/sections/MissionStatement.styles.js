import { styled } from '@mui/system'

const Background = styled('div')(({ theme }) => ({
  padding: '2.5rem 0rem',
  position: 'relative',
  overflow: 'hidden',
  zIndex: '1',

  ['&:before']: {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: 'linear-gradient(to right, rgba(211, 211, 211, 0.5), rgba(255, 255, 255, 0.5))',
    zIndex: '-1',
  },
}))

export { Background }
