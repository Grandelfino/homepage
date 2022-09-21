import * as React from 'react'
import SEO from '../components/head'
import Layout from '../components/layout'

import { Grid, Typography, Divider, Paper } from '@mui/material'
import { StaticImage } from 'gatsby-plugin-image'

const AboutUS = () => (
  <>
    <Layout title={'Grandelfino - チーム紹介'}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h1">Grandelfinoの発足</Typography>
        <Typography variant="body1" sx={{ pb: 1 }}>
          Grandelfinoは2005年秋に自動車部のメンバーにより同志を募り、立ち上げられました。
          <br />
          大学での活動をさせていただくために原動力付自転車のエンジンを使ったマシンを作るなど、
          学内でのアピールを盛んに行い、 2006年度には京都工芸繊維大学の
          「学生と教員の共同プロジェクト」の第一号に採用され、
          ここから全日本学生フォーミュラに参戦するための本格的な活動を開始しました。
        </Typography>
        <Divider />
        <Grid container justify="center" alignItems="center">
          <Grid item sm={8} xs={12} alignItems="center">
            <Typography variant="h1">Grandelfinoについて</Typography>
            <Typography variant="body1">
              Grandelfino(グランデルフィーノ)は京都工芸繊維大学の学生フォーミュラ参戦プロジェクトチームです。
              設計製作はもちろん、部品調達やスポンサー様との渉外活動もすべて学生で行っています。
              自らフォーミュラカーを制作する過程で、モノづくりやチーム運営に重要なことを学べるよう、
              日々活動しています。
              <br />
              Grandelfinoは2017年度に3度目の総合優勝を達成し、これからも総合優勝を目標として活動してまいります。
              また、海外大会に出場し、優勝することも最終的な目標の一つとしています。
            </Typography>
          </Grid>
          <Grid item sm={4} xs={12} alignItems="center">
            <StaticImage src="../images/teamlogo.png" />
          </Grid>
        </Grid>
        <Typography variant="h1">活動内容</Typography>
        <Typography variant="body1">
          Grandelfinoの活動は大きく分けて以下の3つに分類されます。
        </Typography>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={8} alignItems="center">
            <Typography variant="h2">設計・製作・改良</Typography>
            <Typography variant="body1" sx={{ pb: 2 }}>
              フォーミュラカーを製作するには多くの材料や部品、設備、技術、知識が必要になります。
              そのため、多くの企業や団体、そして個人の方々にGrandelfinoの活動をご理解いただき、
              スポンサーとして支援していただいております。
            </Typography>
            <Typography variant="body1" sx={{ pb: 2 }}>
              支援していただいているスポンサー様には、月間活動報告書を送付し、
              車両へのステッカー貼付や
              ウェブサイトへの掲載など、微力ながら広告活動を行っております。
            </Typography>
            <Typography variant="body1" sx={{ pb: 2 }}>
              さらに、「東京モーターショー」や「フロムセブンミーティング」などで紹介の場をいただき、
              学生フォーミュラの活動を少しでも広げることができるよう活動しております。
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StaticImage
              src="../images/about_us/Extracurricular.jpg"
              alt="design"
              style={{ margin: 5 }}
            />
          </Grid>
        </Grid>
        <Divider />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={8} alignItems="center">
            <Typography variant="h2">組織運営</Typography>
            <Typography variant="body1">
              多くのメンバー、いろいろな立場の人々が参加するこの活動は、
              チームをまとめて円滑に運営することは非常に難しいことです。
              <br />
              それぞれのワークグループが自由に設計・製作をしても1台の車両となったとき、
              いろいろな不具合が出ることがよくあります。これらを未然に防ぐため、
              意思疎通による設計の共有やスケジュールの管理、モチベーションの維持などが必要になります。
              こういった、組織としての管理も重要な活動の一つです。
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StaticImage
              src="../images/about_us/Meeting.jpg"
              alt="Extracurricular"
              style={{ maxHeight: 300, margin: 5 }}
            />
          </Grid>
        </Grid>
        <Divider />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={8} alignItems="center">
            <Typography variant="h2">ドライバー育成</Typography>
            <Typography variant="body1">
              良い車両を製作できたとしても、その性能を限界まで引き出せなければ、
              学生フォーミュラ大会で良い成績を収めることは出来ません。
              車両とドライバー、二つが伴ってこそ初めて良い成績が収めることが出来ます。
              Grandelfinoでは、レーシングカートなどを用いてドライバーの育成も行なっています。
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StaticImage
              src="../images/about_us/Testing.png"
              alt="Testing"
              style={{ maxHeight: 300, margin: 5 }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Layout>
  </>
)

export default AboutUS

export const Head = () => <SEO title={'AboutUS | Grandelfino'} />
