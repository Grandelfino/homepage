import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { blue } from '@mui/material/colors'
import Container from '@mui/system/Container'
import NavBar from '../components/navbar'
import { Box } from '@mui/system'

export default function Layout(props) {
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: blue,
      secondary: {
        main: '#d81b60',
      },
      background: {
        default: 'whitesmoke',
      },
    },
    typography: {
      fontFamily: '"Noto Sans JP"',
      wordBreak: 'keep-all',
      overflowWrap: 'break-word',
    },
  })
  theme.typography.h1 = {
    fontSize: '2.5rem',
    fontWeight: 500,
    lineHeight: 1.75,
    letterSpacing: '-0.035em',
    [theme.breakpoints.only('xs')]: {
      fontSize: '2rem',
    },
  }
  theme.typography.h2 = {
    fontSize: '1.65rem',
    fontWeight: 450,
    lineHeight: 1.6,
    letterSpacing: '-0.03em',
  }
  theme.typography.h3 = {
    fontSize: '1.5rem',
    fontWeight: 450,
    lineHeight: 1.5,
    letterSpacing: '-0.025em',
  }
  theme.typography.h4 = {
    fontSize: '1.25rem',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '-0.02em',
  }
  theme.body1 = {
    lineHeight: 1.7,
    letterSpacing: '0.05em',
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar title={props.title} />
      <Container maxWidth="lg">{props.children}</Container>
      <footer>
        <Box sx={{ textAlign: 'center' }}>
          <p>© All rights reserved by Grandelfino.</p>
        </Box>
      </footer>
    </ThemeProvider>
  )
}
