import * as React from 'react'
import SEO from '../components/head'
import Layout from '../components/layout'

import { Box, Card, CardContent, Grid, Typography, Paper } from '@mui/material'

import { graphql } from 'gatsby'

const Member = ({ data }) => {
  const admin = data.allContentfulMember.edges.filter(
    ({ node }) => node.role == 'Admin'
  )
  const chassis = data.allContentfulMember.edges.filter(
    ({ node }) => node.role == 'Chassis'
  )
  const powertrain = data.allContentfulMember.edges.filter(
    ({ node }) => node.role == 'Powertrain'
  )
  const FA = data.allContentfulMember.edges.filter(
    ({ node }) => node.role == 'FA'
  )
  return (
    <>
      <Layout title={'Grandelfino - メンバー紹介'}>
        <Paper sx={{ p: 5 }}>
          <Typography variant="h1">メンバー紹介</Typography>
          <Typography variant="body1">
            Grandelfinoのチームメンバーを紹介します。
          </Typography>
          <Typography variant="h2">幹部</Typography>
          <Typography variant="body1">
            チームを取りまとめ、プロジェクトを円滑に進める役割を担います。
          </Typography>
          <MemberList member={admin} />
          <Typography variant="h2">パワートレイン班</Typography>
          <Typography variant="body1">
            パワートレイン班は、エンジンや駆動系などを担当するグループです。
            「エンジンやそのエンジンパワーを伝え制御する部品」を担当しています。
          </Typography>
          <MemberList member={powertrain} />
          <Typography variant="h2">シャシ・フレーム班</Typography>
          <Typography variant="body1">
            シャシ・フレーム班は車両の骨組みのフレームや足回りのサスペンションなどを担当するグループです。
            「自立するために必要な部品」を主に担当しています。
          </Typography>
          <MemberList member={chassis} />
          <Typography variant="h2">指導教員(Faculty Advisor)</Typography>
          <Typography variant="body1">
            技術・知識・渉外等、学生には至らない部分においてアドバイスをいただいたり、活動を行う上での正式な顧問として在籍していただいております。
            FAの先生方以外にも、「学生と教員の共同プロジェクト」の協力教員や、ものづくり教育研究支援センターの職員の方々などにGrandelfinoの活動を支えていただいております。
          </Typography>
          <MemberList member={FA} />
        </Paper>
      </Layout>
    </>
  )
}

const MemberList = ({ member }) => {
  return (
    <>
      <Grid container>
        {member.map(({ node }) => (
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: 'flex', justifyContent: 'center', p: 1 }}
          >
            <Card sx={{ flexGrow: 1 }} elevation={2}>
              <Box sx={{ display: { sm: 'inline', md: 'flex' } }}>
                <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="h4">{node.name}</Typography>
                </CardContent>
                <CardContent>
                  <Typography>{node.grade}</Typography>
                  {node.charge != null &&
                    node.charge.map((item) => (
                      <Typography>
                        <li>{item}</li>
                      </Typography>
                    ))}
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export const query = graphql`
  {
    allContentfulMember(sort: { fields: role, order: ASC }) {
      edges {
        node {
          charge
          grade
          name
          role
        }
      }
    }
  }
`

export default Member

export const Head = () => <SEO title={'Member | Grandelfino'} />
