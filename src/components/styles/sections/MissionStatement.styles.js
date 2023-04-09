import { styled } from '@mui/system'

const Background = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary_100.secondary,
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
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: '2',
  },
}))

export { Background }
