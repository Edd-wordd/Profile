import { styled } from '@mui/system'
import { Grid } from '@mui/material'

const CustomAccordion = styled(Grid)(({ theme }) => ({
  width: '100%',
  maxWidth: theme.spacing(100),
  marginTop: theme.spacing(0.5),
  backgroundColor: theme.palette.defaultLight.main,
}))

export { CustomAccordion }
