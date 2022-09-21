import * as React from 'react'
import SEO from '../components/head'
import Layout from '../components/layout'

import { Box, Typography } from '@mui/material'
import { Link } from 'gatsby'
import {
  Card,
  CardMedia,
  Grid,
  CardContent,
  CardActionArea,
  Paper,
} from '@mui/material'
import { CssBaseline } from '@mui/material'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import { StaticImage } from 'gatsby-plugin-image'

const theme = createTheme({
  palette: {
    neutral: {
      main: '#fff',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: [
      '"Noto Sans JP"',
      'Roboto',
      '"Helvetica"',
      'Arial',
      'sans-serif',
    ].join(','),
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
  fontSize: '1.5rem',
  color: 'white',
}

const About_SAE = () => {
  return (
    <>
      <Hero />
      <Layout title={'About SAE'}>
        <Paper
          elevation={3}
          sx={{
            p: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { md: 'row', sm: 'column', xs: 'column' },
              alignItems: 'center',
            }}
          >
            <CardMedia
              sx={{
                objectFit: 'cover',
                width: { md: '100%', sm: '80%', xs: '80%' },
              }}
            >
              <StaticImage src="../images/sae/JFSAE_logo.png" />
            </CardMedia>
            <CardContent>
              <Typography variant="h2">全日本学生フォーミュラ</Typography>
              <Typography variant="body1">
                全日本学生フォーミュラ大会はFormula
                SAEの日本版として、同様の理念の下、社団法人自動車技術会の主催で、
                2003年より開催されています。大会ルールはFormula
                SAEと同一のものに
                日本大会独自ルールを加えたものが適用されています。
              </Typography>
              <Typography variant="body1">
                2003年、第1回大会が富士スピードウェイにおいて開催された時の参加チームは17チームであった日本大会も
                2006年の第4回大会では世界の優勝校を招いて世界大会が開催されました。
                2017年の第15回大会では93チームもの大学チームが国内外より参加する規模の大きな大会となり、
                全日本学生フォーミュラ大会はFormula
                SAEのアジア大会というべきものにまで発展しています。
              </Typography>
            </CardContent>
          </Box>
          <Typography variant="h2" textAlign="center">
            競技種目
          </Typography>
          <Typography variant="body1">
            学生フォーミュラの競技種目は大きく２つに分類されます。
            １つは実際にマシンを販売すると仮定した時の費用や販売戦略などを評価する静的審査、
            もう１つは実際にマシンの走行性能を評価する動的審査です。
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs="12" sm="6" align="center">
              <Card variant="outlined">
                <CardActionArea component={Link} to="/static">
                  <CardContent>
                    <Typography variant="h4">Static Events</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs="12" sm="6" align="center">
              <Card variant="outlined">
                <CardActionArea component={Link} to="/dynamic">
                  <CardContent>
                    <Typography variant="h4">Dynamic Events</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </Layout>
    </>
  )
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
        src="../images/sae/14th_photo.jpg"
        alt="Top page"
        style={{
          gridArea: '1/1',
        }}
        layout="fullWidth"
      />
      <Box
        sx={{
          gridArea: '1/1',
          position: 'relative',
          // This centers the other elements inside the hero component
          placeItems: 'center',
          display: 'grid',
        }}
      >
        <Grid container justifyContent="center">
          <Grid item xs={8}>
            <ThemeProvider theme={theme}>
              <Typography align="center" variant="h1">
                FormulaSAE
              </Typography>
              <Typography variant="body1">
                Formula
                SAEとは、教室の中だけでは優秀なエンジニアが育たないことにいち早く気づいたアメリカ合衆国において、
                『ものづくりによる実践的な学生教育プログラム』として、自動車技術者協会
                (Society of Automotive Engineers)の主催により、
                1982年より開催されている、自動車競技会です。
                その目的は、フォーミュラカーの設計・製作を通して、
                学生に仮想企業を運営させ、
                実践的な知識を身に付けさせることにあります。
              </Typography>
              <Typography variant="body1">
                現在、アメリカでは140校を超える大学チームが国内外からも参加する国際的な大会になっています。
                また、1998年にはイギリスで、2000年にはオーストラリアで、さらにはドイツ、イタリア、ブラジルで
                同様のルールによる競技が開催されています。
              </Typography>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default About_SAE

export const Head = () => <SEO title={'AboutSAE | Grandelfino'} />
