// import { makeStyles } from '@mui/styles'

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

const Title = styled('h4')(({ theme }) => ({
  paddingBottom: '1rem',
}))

const SubTitle = styled('h6')(({ theme }) => ({
  marginTop: '1rem',
}))

const LineL = styled('div')(({ theme }) => ({
  marginTop: '.8rem',
  marginRight: '.75rem',
  width: '250px',
  height: '1px',
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  [theme.breakpoints.down('xs')]: {
    marginTop: '.5rem',
    marginRight: '.75rem',
    width: '135px',
  },
}))
const Diamond = styled('div')(({ theme }) => ({
  width: '20px',
  height: '20px',
  border: '4px solid #343a40',
  transform: 'rotate(45deg)',
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  [theme.breakpoints.down('xs')]: {
    width: '15px',
    height: '15px',
    border: '2px solid #343a40',
  },
}))
const LineR = styled('div')(({ theme }) => ({
  marginTop: '.8rem',
  marginLeft: '.75rem',
  width: '250px',
  height: '1px',
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  [theme.breakpoints.down('xs')]: {
    marginTop: '.5rem',
    marginLeft: '.75rem',
    width: '135px',
  },
}))
const DiamondWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

export { TitleWrapper, Title, SubTitle, LineL, Diamond, LineR, DiamondWrapper }
// const useStyles = makeStyles((theme) => ({
//   titleWrapper: {
//     marginTop: '3rem',
//     [theme.breakpoints.down('xs')]: {
//       paddingBottom: theme.spacing(6),
//       paddingTop: theme.spacing(6),
//     },
//   },
//   title: {
//     paddingBottom: '1rem',
//   },
//   subTitle: { marginTop: '1rem' },
//   lineL: {
//     marginTop: '.8rem',
//     marginRight: '.75rem',
//     width: '250px',
//     height: '1px',
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     [theme.breakpoints.down('xs')]: {
//       marginTop: '.5rem',
//       marginRight: '.75rem',
//       width: '135px',
//     },
//   },
//   lineR: {
//     marginTop: '.8rem',
//     marginLeft: '.75rem',
//     width: '250px',
//     height: '1px',
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     [theme.breakpoints.down('xs')]: {
//       marginTop: '.5rem',
//       marginLeft: '.75rem',
//       width: '135px',
//     },
//   },
//   diamond: {
//     width: '20px',
//     height: '20px',
//     border: '4px solid #343a40',
//     transform: 'rotate(45deg)',
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     [theme.breakpoints.down('xs')]: {
//       width: '15px',
//       height: '15px',
//       border: '2px solid #343a40',
//     },
//   },
// }))
//
// export { useStyles }
