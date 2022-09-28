import * as React from 'react'
import styled from 'styled-components'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { blue } from '@mui/material/colors'
import Container from '@mui/system/Container'
import NavBar from '../components/navbar'
import { Box } from '@mui/system'
import { Grid, Typography } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import { Link } from 'gatsby'

const StyledLink = styled(Link)`
  color: gainsboro;
  text-decoration: none;
  &:hover {
    color: darkgray;
  }
`

const FootNav = () => {
  return (
    <Box mt={3} p={3} bgcolor="#333333">
      <Grid container>
        <Grid item xs={12} md={3}>
          <Typography variant="h1" color="white">
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Grandelfino
            </Link>
          </Typography>
          <Typography variant="body1" color="whitesmoke" mb={1}>
            We are a student formula project team of Kyoto Institute of
            Technology.
          </Typography>
          <Link
            to="https://twitter.com/grandelfino_kit"
            target="_blank"
            style={{ margin: '5px' }}
          >
            <TwitterIcon fontSize="large" sx={{ color: 'white' }} />
          </Link>
          <Link
            to="https://www.facebook.com/people/Formula-SAE-Project-Team-Grandelfino/100066444980272/"
            target="_blank"
          >
            <FacebookIcon fontSize="large" sx={{ color: 'white' }} />
          </Link>
        </Grid>
        <Grid item xs={12} md={3} sx={{ mt: 1 }}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold' }}
            mb={1}
            color="white"
          >
            私たちについて
          </Typography>
          <Typography variant="body1" textAlign="left">
            <StyledLink to="/about_us">チーム紹介</StyledLink>
          </Typography>
          <Typography variant="body1" textAlign="left">
            <StyledLink to="/history">大会成績</StyledLink>
          </Typography>
          <Typography variant="body1" textAlign="left">
            <StyledLink to="/machines">マシン紹介</StyledLink>
          </Typography>
          <Typography variant="body1" textAlign="left">
            <StyledLink to="/member">メンバー</StyledLink>
          </Typography>
          <Typography variant="body1" textAlign="left" pb={1}>
            <StyledLink to="/contact">お問い合わせ</StyledLink>
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold' }}
            mb={1}
            color="white"
          >
            スポンサー
          </Typography>
          <Typography>
            <StyledLink to="/sponsor">スポンサー様一覧</StyledLink>
          </Typography>
          <Typography>
            <StyledLink to="/sponsorship">スポンサーシップについて</StyledLink>
          </Typography>

          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold' }}
            mb={1}
            mt={1}
            color="white"
          >
            学生フォーミュラについて
          </Typography>
          <Typography>
            <StyledLink to="/about_SAE">学生フォーミュラとは</StyledLink>
          </Typography>
          <Typography>
            <StyledLink to="/static">静的審査</StyledLink>
          </Typography>
          <Typography>
            <StyledLink to="/dynamic">動的審査</StyledLink>
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold' }}
            color="white"
            mb={1}
            mt={1}
          >
            <StyledLink to="/policy">サイトポリシー</StyledLink>
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold' }}
            style={{ color: 'white' }}
          >
            <StyledLink
              to="https://blog.grandelfino.net/"
              target="_blank"
              color="white"
            >
              活動記録
            </StyledLink>
          </Typography>
        </Grid>
      </Grid>
      <footer>
        <Box sx={{ textAlign: 'center' }}>
          <p>
            <font color="white">© All rights reserved by Grandelfino.</font>
          </p>
        </Box>
      </footer>
    </Box>
  )
}

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
    [theme.breakpoints.only('xs')]: {
      fontSize: '1.1rem',
    },
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
      <FootNav />
    </ThemeProvider>
  )
}
