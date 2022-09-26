import * as React from 'react'
import Button from '@mui/material/Button'
import SEO from '../components/head'
import Layout from '../components/layout'
import { Box, Paper, Typography } from '@mui/material'
import { Link } from 'gatsby'
import { Card, CardMedia, Grid } from '@mui/material'
import { CssBaseline } from '@mui/material'
import { StaticImage } from 'gatsby-plugin-image'

import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    neutral: {
      main: '#fff',
      contrastText: '#fff',
    },
  },
})

theme.typography.h1 = {
  fontSize: '5rem',
  marginTop: theme.spacing(10),
  fontWeight: 'bold',
  color: 'white',
  letterSpacing: '1px',
  [theme.breakpoints.down('lg')]: {
    marginTop: theme.spacing(10),
    fontSize: '4rem',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(10),
    fontSize: '3rem',
  },
}

theme.typography.h4 = {
  fontSize: '2rem',
  color: 'gainsboro',
  fontWeight: 'Normal',
  paddingBottom: theme.spacing(5),
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
  },
}

theme.typography.body1 = {
  fontSize: '0.7rem',
}

const Hero = () => {
  return (
    <Box
      sx={{
        display: 'grid',
      }}
    >
      <CssBaseline />
      <StaticImage
        src="../images/index/index_8.jpg"
        alt="Top page"
        style={{
          gridArea: '1/1',
          maxHeight: "480px",
          filter: "brightness(0.4)"
        }}
        layout="fullWidth"
      />
      <Box
        sx={{
          gridArea: '1/1',
          position: 'relative',
          // This centers the other elements inside the hero component
          placeItems: 'left',
          display: 'grid',
        }}
      >
        <Box pt={10} pl={4}>
          <ThemeProvider theme={theme}>
            <Typography variant="h1">Grandelfino</Typography>
            <Typography variant="h4">
              We are a student formula project team of Kyoto Institute of
              Technology.
            </Typography>
            <Button
              component={Link}
              to="/about_us"
              color="neutral"
              sx={{
                marginBottom: 4,
              }}
              variant="outlined"
            >
              About US
            </Button>
          </ThemeProvider>
        </Box>
      </Box>
    </Box>
  )
}

const AboutUS = () => {
  return (
    <Grid align="center">
      <Box p={3}>
        <Typography variant="h1">Grandelfino</Typography>
        <Typography variant="body1" fontSize="1.2rem">
          Grandelfinoは京都工芸繊維大学の学生フォーミュラプロジェクトチームです。2007年度大会から参戦し、2012・2016・2017・2022年度には総合優勝を果たしました。
        </Typography>
        <Card variant="outlined" sx={{ maxWidth: 600 }}>
          <CardMedia>
            <StaticImage src="../images/index/index_4.jpg" alt="Top page" />
          </CardMedia>
        </Card>
        <Button
          variant="outlined"
          component={Link}
          to="/history"
          sx={{
            marginTop: 4,
          }}
        >
          More Info
        </Button>
      </Box>
    </Grid>
  )
}

const AboutSAE = () => {
  return (
    <Grid align="center">
      <Box p={3}>
        <Typography variant="h1">全日本学生フォーミュラ大会</Typography>
        <Typography variant="body1" fontSize="1.2rem">
          全日本学生フォーミュラ大会は大学生が自らの手でフォーミュラカーを製作し、
          競い合うことで、モノづくりの実践的な知識を身につけようというものです。
        </Typography>
        <Card variant="outlined" sx={{ maxWidth: 600 }}>
          <CardMedia>
            <StaticImage src="../images/sae/JFSAE_logo.png" alt="sae_logo" />
          </CardMedia>
        </Card>
        <Button
          variant="outlined"
          component={Link}
          to="/about_SAE"
          sx={{
            marginTop: 4,
          }}
        >
          More Info
        </Button>
      </Box>
    </Grid>
  )
}



const AboutSponsor = () => {
  return (
    <Grid align="center">
      <Box p={5}>
        <Typography variant="h1">スポンサー</Typography>
        <Typography variant="body1" fontSize="1.2rem">
          Grandelfinoの活動は、多数のスポンサー様によって支えられております。
          私たちを支えてくださるスポンサー様を紹介いたします。
        </Typography>

        <Card elevation={1} sx={{ maxWidth: 600 }}>
          <CardMedia>
            <StaticImage src="../images/index/index_3.jpg" alt="sponsor" />
          </CardMedia>
        </Card>

        <Button
          variant="outlined"
          component={Link}
          to="/sponsor"
          sx={{
            marginTop: 4,
          }}
        >
          More Info
        </Button>
      </Box>
    </Grid>
  )
}

const IndexPage = () => {
  return (
    <>
      <Hero />
      <Layout title={'Grandelfino'}>
        <Paper elevation={1}>
          <AboutUS />
          <AboutSAE />
          <AboutSponsor />
        </Paper>
      </Layout>
    </>
  )
}

export default IndexPage

export const Head = () => <SEO title={'Home | Grandelfino'} />
