import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'
import { ThemeProvider } from '@mui/system'
import theme from '../src/theme'

export default function testComponent(Component, descriptor) {
  describe(`${descriptor}`, () => {
    let container = null
    beforeEach(() => {
      // setup a DOM element as a render target
      container = document.createElement('div')
      document.body.appendChild(container)
    })

    afterEach(() => {
      // cleanup on exiting
      unmountComponentAtNode(container)
      container.remove()
      container = null
    })
    it(`should render ${descriptor}`, () => {
      act(() => {
        render(<ThemeProvider theme={theme}>Component </ThemeProvider>, container)
      })
      expect(pretty(container.innerHTML)).toMatchSnapshot()
    })
  })
}
