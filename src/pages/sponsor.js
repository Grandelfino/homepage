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
          <Button
            size="large"
            color="primary"
            component={Link}
            to={node.url}
            target="_blank"
          >
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
