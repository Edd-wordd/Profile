import React from 'react'
import { Button } from '@mui/material'

function NavButton({ tab, theme, windowLocation }) {
  return (
    <Button
      key={tab.route}
      href={tab.route}
      sx={{
        fontSize: 16,
        fontWeight: 500,
        padding: '1.5rem 0 1.5rem 0',
        color: theme.palette.defaultLight.main,
        letterSpacing: '.3rem',
        transitionTimingFunction: 'ease-in',
        transition: '.5s',
        '&:hover': {
          color: theme.palette.primary_300.main,
          backgroundColor: 'transparent',
          textShadow: `1px 1px ${theme.palette.primary_300.main}`,
        },
        ...(windowLocation.pathname === tab.route && {
          color: theme.palette.primary_300.main,
          textShadow: `1px 1px ${theme.palette.primary_300.main}`,
          marginBottom: '.5rem',
          textDecoration: 'line-through',
          '&:hover': {
            textDecoration: 'line-through',
          },
        }),
      }}
    >
      {tab.label}
    </Button>
  )
}

export default NavButton
