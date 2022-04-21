import React from 'react'
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen, cleanup } from './test-utils'
import ThemePage from '../pages/theme'
afterEach(cleanup)

describe('ThemePage', () => {
  it('should render button with specific text', () => {
    const { getByTestId } = render(<ThemePage />)

    expect(getByTestId('theme-change-button')).toHaveTextContent('change theme')
  })
})
