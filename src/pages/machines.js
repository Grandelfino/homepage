import * as React from 'react'
import SEO from '../components/head'
import Layout from '../components/layout'

import noImg from '../images/no-image.png'

import { Paper, Divider } from '@mui/material'
import { graphql, Link } from 'gatsby'

import {
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Box,
  Typography,
} from '@mui/material'

const Machines = ({ data }) => (
  <>
    <Layout title={'Grandelfino - マシン紹介'}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h1">マシンについて</Typography>
        <Typography variant="body1">
          我々の活動はフォーミュラスタイルのレーシングカーを設計製作し、
          全日本学生フォーミュラ大会に出場することにあります。
          活動初年度の2007年度は試作車としてGDF-01、大会出場車両としてGDF-02を製作しました。
          以後、毎年１台のペースで設計製作を行っております。
        </Typography>
        <Typography variant="body1" sx={{ pb: 1 }}>
          車両名にある「GDF-**」というのは、チーム名の「GranDelFino」を略して「GDF」とし、
          そのあとにある数字は、何両目の車両であるかを意味しています。
        </Typography>

        <Divider />
        <Typography variant="h1">歴代車両</Typography>
        <Box>
          {data.allContentfulMachine.edges.map(({ node }) => (
            <div key={node.id}>
              <MachineCard node={node} />
            </div>
          ))}
        </Box>
      </Paper>
    </Layout>
  </>
)

const MachineCard = ({ node }) => {
  const src = node.image != null ? node.image.url : noImg
  const alt = node.image != null ? node.image.filename : 'noImg'
  const entry =
    node.competition != null ? '/history#' + node.competition.year : '/history'
  return (
    <>
      <Card sx={{ m: 2 }} elevation={3}>
        <CardMedia
          component="img"
          src={src}
          alt={alt}
          sx={{ maxHeight: '350px' }}
        />
        <CardContent>
          <Typography variant="h3">{node.carName}</Typography>
          <Typography variant="body1">
            {node.description.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="large"
            color="primary"
            component={Link}
            to={entry}
            disabled={node.competition == null}
          >
            大会成績を見る
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default Machines

export const Head = () => <SEO title={'Machines | Grandelfino'} />

export const query = graphql`
  {
    allContentfulMachine(sort: { fields: carName, order: DESC }) {
      edges {
        node {
          id
          carName
          image {
            url
            filename
          }
          description {
            description
          }
          competition {
            year
          }
        }
      }
    }
  }
`
