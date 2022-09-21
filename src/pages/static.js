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
          <Typography variant="h1">静的審査</Typography>
          <Typography variant="body1">
            静的審査ではマシンを実際に販売すると仮定した際に、どれだけコストがかかるのか・どのような戦略で販売するのかなど、
            設計上の工夫や提出した書類の完成度を競います。
          </Typography>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} sm={8} alignItems="center">
              <Typography variant="h2">コスト審査</Typography>
              <Typography variant="body1">
                コスト審査では、車両を見ながら事前に提出したコストレポートのコスト精度、チームによる製造度合等を確認し、
                レポートのコストと車両との適合を審査されます。
                また、一般に購入品目となる2項目について、
                部品製造プロセスなどの口頭試問が行われ、それらの知識・理解度を評価されます。
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <StaticImage
                src="../images/sae/static_event/Cost.jpg"
                alt="cost"
                style={{ maxHeight: 300, margin: 5 }}
              />
            </Grid>
          </Grid>
          <Divider />
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} sm={8} alignItems="center">
              <Typography variant="h2">プレゼン審査</Typography>
              <Typography variant="body1">
                『審査のコンセプトに沿い、製造会社の役員に設計上の優れていることを確信させる』という仮想のシチュエーション
                のもとで、学生のプレゼン能力について審査されます。
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <StaticImage
                src="../images/sae/static_event/Presentation.jpg"
                alt="presentation"
                style={{ maxHeight: 300, margin: 5 }}
              />
            </Grid>
          </Grid>
          <Divider />
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} sm={8} alignItems="center">
              <Typography variant="h2">デザイン審査</Typography>
              <Typography variant="body1">
                事前に提出する設計資料と実際の車両をもとに、どのような技術が使われているか、どのような工夫がなされているのか
                などを口頭質問を交えて評価されます。
                静的審査の中では最も得点配分の大きい審査です。
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <StaticImage
                src="../images/sae/static_event/Design.jpg"
                alt="design"
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
