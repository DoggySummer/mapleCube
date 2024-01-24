'use client'
import { createTheme, ThemeProvider } from '@mui/material'
import { ReactNode } from 'react'

const theme = createTheme({
  typography: {
    fontFamily: 'mapleFont',
  },
})

const ThemeClient = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeClient
