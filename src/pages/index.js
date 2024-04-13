import * as React from 'react'
import Button from '@mui/material/Button'
import SEO from '../components/head'
import Layout from '../components/layout'
import { Box, Paper, Typography } from '@mui/material'
import { Link } from 'gatsby'
import { Card, CardMedia, CardActionArea, Grid } from '@mui/material'
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
        src="../images/index/index_1.jpg"
        alt="Top page"
        style={{
          gridArea: '1/1',
          maxHeight: '480px',
          filter: 'brightness(0.5)',
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
        
        <Typography variant="body1" frontSize="1.0rem">
          クラウドファインディング終了！
          <br />
          
        </Typography> 
         <Card variant="outlined" sx={{ maxWidth: 600, '&:hover': {color: 'black'}}}>
          <CardActionArea href="https://readyfor.jp/projects/grandelfino">
            <CardMedia>
              <StaticImage src="../images/index/index_7.jpg" alt="Top page" />
            </CardMedia>
          </CardActionArea>
        </Card>
         
         <Typography variant="h1" >クラウドファンディング支援者ご芳名</Typography>
         <br />
   <Grid container justify="center" alignItems="center">    
      <Grid item sm={4} xs={12} alignItems="center">
         <Typography variant="h2" >
             A-SMILECENTER 様
             <br />
             M.S. 様
             <br/>
            </Typography>  
        </Grid>
       <Grid item sm={4} xs={12} alignItems="center">
           <Typography variant="h2" >
             Masaya & Takuma 様
             <br />
             nakataro.com 様
             <br />
             </Typography>
        </Grid>
        <Grid item sm={4} xs={12} alignItems="center">
            <Typography variant="h2" >
             黒瀬矯正歯科 様
             <br />
             堀田 大樹 様
             <br />
             </Typography>
        </Grid> 
    <Grid container justify="center" alignItems="center">    
      <Grid item sm={4} xs={12} alignItems="center">
            <Typography variant="h3" >
              <br/>
           KANZI 様
           <br/>
           医療法人さくらメディカル 様
           <br/>
           </Typography>
      </Grid>
      <Grid item sm={4} xs={12} alignItems="center">
             <Typography variant="h3" >
           小出医院 様
           <br />
           中島 隆一 様
           <br/>
            </Typography>
      </Grid>
      <Grid item sm={4} xs={12} alignItems="center">
           <Typography variant="h3" >
           ♨️チーム仲良し♨️ 様 
           </Typography>
      </Grid>     
    </Grid>
    <Grid container justify="center" alignItems="center">    
      <Grid item sm={4} xs={12} alignItems="center">
           <Typography variant="h6" >
            <br/>
           岩城 喜久 様
            <br/>
           北山 周 様
            <br/>
           柴田 光貴 様 
           <br/>
           </Typography>
      </Grid>
      <Grid item sm={4} xs={12} alignItems="center">
           <Typography variant="h6" >
           積水化成品 廣田 徹治 様
           <br />
           彌山 岳寛 様 
           <br />
           </Typography>
      </Grid>
      <Grid item sm={4} xs={12} alignItems="center">
           <Typography variant="h6" >
           若林 尚伸 様 
           <br />
           ワイドヴィル 代表 廣田 良浩(大学OB) 様
           <br />
           </Typography>
      </Grid>     
    </Grid>
    <Grid container justify="center" alignItems="center">    
      <Grid item sm={3} xs={12} alignItems="center">
           <Typography variant="h7" >
            <br/>
           『あき』  様
            <br/>
            Bach 様
            <br/>
            ＫＩＴ同窓会浜松支部 様 
            <br/>
            M.Hasegawa 様
            <br/>
            Morimoto 様
           </Typography>
      </Grid>
      <Grid item sm={3} xs={12} alignItems="center">
           <Typography variant="h7" >
             Nobu 様
             <br />
             SHIN 様 
             <br />
             梅原 大祐 様
             <br />
             大西 勲 様
             <br />
             光本 保英 様
             </Typography>
      </Grid>
      <Grid item sm={3} xs={12} alignItems="center">
        <Typography variant="h7" >
             さくゆき 様
             <br />
             橘 見治郎 様
             <br/>
             田中 洋介 様
             <br/>
             辻畑 大暉 様
             <br/>
             土井 大樹 様
             </Typography>
      </Grid>
      <Grid item sm={3} xs={12} alignItems="center">
           <Typography variant="h7" >
             外岡 大志 様
             <br />
             中島 隆一 様
             <br />
             梅原 大祐 様
             <br />
             永井 孝幸 様
             <br />
             藤原 ロイ 様
             </Typography>
      </Grid>     
    </Grid>
   </Grid>   
     
        <br />
        <br />
        
        <Typography variant="body1" fontSize="1.2rem">
        他60名、総勢97名様からご支援をいただきました。<br/>
          心より感謝申し上げます。
        </Typography>
        <Card variant="outlined" sx={{ maxWidth: 600 }}>
          <CardMedia>
            <StaticImage src="../images/index/index_6.jpg" alt="Top page" />
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
        <Typography variant="body1" fontSize="1.2rem">
          Grandelfinoは京都工芸繊維大学の学生フォーミュラプロジェクトチームです。
          <br />
          2007年度大会から参戦し、2012・2016・2017・2022・2023年度には総合優勝を果たしました。
        </Typography>
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
