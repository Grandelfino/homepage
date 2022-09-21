import * as React from 'react'
import SEO from '../components/head'
import Layout from '../components/layout'

import { Typography, Grid, Paper, Divider } from '@mui/material'

import { StaticImage } from 'gatsby-plugin-image'

const Dynamic = () => {
  return (
    <>
      <Layout title={'AboutSAE - 動的審査'}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h1">動的審査</Typography>
          <Typography variant="body1">
            動的審査では製作したマシンを実際に走行させ、4種類の審査でマシンの実性能を競います。
          </Typography>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} sm={8} alignItems="center">
              <Typography variant="h2">アクセラレーション</Typography>
              <Typography variant="body1">
                75mの直線コースにおいて、静止状態から加速し、タイムを計測することで、マシンの加速性能を競います。
                各チーム２名のドライバーが２回ずつ走行でき、最も速いタイムが記録されます。
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <StaticImage
                src="../images/sae/dynamic_event/Acc.jpg"
                alt="ACC"
                style={{ maxHeight: 300, margin: 5 }}
              />
            </Grid>
          </Grid>
          <Divider />
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} sm={8} alignItems="center">
              <Typography variant="h2">スキッドパッド</Typography>
              <Typography variant="body1">
                8の字状のコースを走行し、マシンのコーナリング性能を競います。
                アクセラレーションと同様、各チーム２名のドライバーが２回ずつ走行でき、最も速いタイムが記録されます。{' '}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <StaticImage
                src="../images/sae/dynamic_event/Skidpad.jpg"
                alt="Skidpad"
                style={{ maxHeight: 300, margin: 5 }}
              />
            </Grid>
          </Grid>
          <Divider />
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} sm={8} alignItems="center">
              <Typography variant="h2">オートクロス</Typography>
              <Typography variant="body1">
                事前に提出する設計資料と実際の車両をもとに、どのような技術が使われているか、どのような工夫がなされているのか
                などを口頭質問を交えて評価されます。
                静的審査の中では最も得点配分の大きい審査です。
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <StaticImage
                src="../images/sae/dynamic_event/Autocross.JPG"
                alt="Autocross"
                style={{ maxHeight: 300, margin: 5 }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Layout>
    </>
  )
}

export default Dynamic

export const Head = () => <SEO title={'Dynamic | Grandelfino'} />
