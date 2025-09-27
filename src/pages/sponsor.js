import * as React from 'react'
import SEO from '../components/head'
import Layout from '../components/layout'

import noImg from '../images/no-image.png'

import { graphql, Link } from 'gatsby'

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  CardActions,
  Button,
  Divider,
  Paper,
} from '@mui/material'

const Sponsor = ({ data }) => {
  let year = new Date().getFullYear()
  year = year + '年度スポンサー様ご紹介'
  const sponsors = data.allContentfulSponsor.edges.filter(
    ({ node }) => node.isSpecial == false
  )
  const specials = data.allContentfulSponsor.edges.filter(
    ({ node }) => node.isSpecial == true
  )
  return (
    <>
      <Layout title={'Grandelfino - スポンサー様一覧'}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h1">スポンサー様一覧</Typography>
          <Typography variant="body1">
            私たちGrandelfinoの活動をさまざまな形でご支援していただいているスポンサー様方々の紹介です。
            温かいご支援を胸に、よいフォーミュラーカーを作れるよう日々努力していきますので、
            Grandelfinoをなにとぞよろしくお願いします。
          </Typography>
          <Typography variant="h2">{year}</Typography>
          <Grid container>
            {sponsors.map(({ node }) => (
              <>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  align="center"
                  style={{ display: 'flex' }}
                >
                  <SponsorCard node={node} />
                </Grid>
              </>
            ))}
          </Grid>
          <Typography variant="h2">スペシャルサンクス</Typography>
          <Grid container>
            {specials.map(({ node }) => (
              <>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  align="center"
                  style={{ display: 'flex' }}
                >
                  <SponsorCard node={node} />
                </Grid>
              </>
            ))}
          </Grid>
          <Typography variant="h2">クラウドファンディング</Typography>
          <Typography variant="body1">
            2023年度に行ったクラウドファンディングにてご支援いただいた方々です。
            ご支援ご協力していただいた皆様に、心より感謝申し上げます。
          </Typography>
          <br />
          <Grid align="center"> 
        <div id="header"></div> 
        <Typography variant="h3" >クラウドファンディング支援者ご芳名</Typography>
         </Grid>
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
          ♨️チーム仲良し♨️ 様 
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
            医療法人
            <br/>
            さくらメディカル 様 
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
           積水化成品 
           <br/>
           廣田 徹治 様
           <br />
           彌山 岳寛 様 
           <br />
           </Typography>
      </Grid>
      <Grid item sm={4} xs={12} alignItems="center">
           <Typography variant="h6" >
           若林 尚伸 様 
           <br />
           ワイドヴィル 代表 
           <br />
           廣田 良浩(大学OB) 様
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
      <Grid align="center">  
        <Typography variant="body1" fontSize="1.2rem">
        他60名、総勢97名様からご支援をいただきました。<br/>
          心より感謝申し上げます。
        </Typography>
        </Grid>
        </Paper>
      </Layout>
    </>
  )
}

const SponsorCard = ({ node }) => {
  return (
    <>
      <Card
        elevation={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          m: 1,
        }}
      >
        <CardMedia
          component="img"
          src={node.logo != null ? node.logo.url : noImg}
          sx={{ height: 200, objectFit: 'contain' }}
        />
        <CardContent>
          <Typography variant="h4">{node.name}</Typography>
          <Typography variant="body1" color={'gray'}>
            {node.brief.brief}
          </Typography>
        </CardContent>
        <Divider sx={{ mt: 'auto' }} />
        <CardActions>
          <Button size="large" color="primary" href={node.url} target="_blank">
            スポンサー様HPへ
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export const query = graphql`
  {
    allContentfulSponsor(sort: { fields: priority, order: ASC }) {
      edges {
        node {
          brief {
            brief
          }
          logo {
            title
            url
          }
          name
          priority
          url
          isSpecial
        }
      }
    }
  }
`

export default Sponsor

export const Head = () => <SEO title={'Sponsor | Grandelfino'} />
