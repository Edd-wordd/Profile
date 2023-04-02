import { styled } from '@mui/system'

const QuestionsBackground = styled('div')(({ theme }) => ({
  backgroundImage: `url(https://images.unsplash.com/photo-1625014618427-fbc980b974f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80)`,
  width: '100%',
  height: 'auto',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center center',
  paddingBottom: '5rem ',
}))

const QuestionLinks = styled('a')(({ theme }) => ({
  color: theme.palette.defaultLight.main,
  textDecoration: 'underline',
  padding: '.5rem .5rem',
  '&:hover': {
    background: theme.palette.primary.main,
    opacity: '.7',
    transform: 'scale(1.05)',
    padding: '.5rem .5rem',
    borderRadius: '5px',
    color: theme.palette.defaultLight.main,
    textDecoration: 'none',
  },
}))
const Span = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '1.5rem',
  fontWeight: '600',
}))

export { QuestionsBackground, QuestionLinks, Span }
