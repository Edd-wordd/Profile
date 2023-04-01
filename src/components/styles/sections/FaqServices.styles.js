// import { makeStyles } from '@mui/system'
//
// const useStyles = makeStyles((theme) => ({
//   infoWrapper: {
//     padding: '2rem 0rem',
//   },
//   accordionWrapper: {
//     padding: '2rem 0rem 8rem 0rem',
//   },
//   accordion: {
//     width: theme.spacing(100),
//     backgroundColor: theme.palette.defaultLight.main,
//     [theme.breakpoints.down('sm')]: {
//       width: theme.spacing(40),
//     },
//   },
// }))
//
// export { useStyles }

// import { makeStyles } from '@mui/system'
//
// const useStyles = makeStyles((theme) => ({
//   infoWrapper: {
//     padding: '2rem 0rem',
//   },
//   accordionWrapper: {
//     padding: '2rem 0rem 8rem 0rem',
//   },
//   accordion: {
//     width: theme.spacing(100),
//     backgroundColor: theme.palette.defaultLight.main,
//     [theme.breakpoints.down('sm')]: {
//       width: theme.spacing(40),
//     },
//   },
// }))
//
// export { useStyles }

import { styled } from '@mui/system'

const InfoWrapper = styled('div')(({ theme }) => ({
  padding: '2rem 0rem',
}))

const AccordionWrapper = styled('div')(({ theme }) => ({
  padding: '2rem 0rem 8rem 0rem',
}))

const CustomAccordion = styled('div')(({ theme }) => ({
  width: theme.spacing(100),
  marginTop: theme.spacing(1),
  backgroundColor: theme.palette.defaultLight.main,
  [theme.breakpoints.down('sm')]: {
    width: theme.spacing(40),
  },
}))

export { InfoWrapper, AccordionWrapper, CustomAccordion }
