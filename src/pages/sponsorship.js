import * as React from 'react'
import SEO from '../components/head'
import Layout from '../components/layout'

import { StaticImage } from 'gatsby-plugin-image'

import { Typography, Grid, Paper, Divider } from '@mui/material'

const SponsorShip = () => {
  return (
    <>
      <Layout title={'Grandelfino - スポンサーシップ'}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h1">スポンサーシップについて</Typography>
          <Typography variant="body1" sx={{ pb: 1 }}>
            私たちGrandelfinoの活動は様々なスポンサー様のご支援により成り立っております。
            技術支援、加工支援、製品支援、金銭支援など様々なスポンサー様のご助力があってこそ、
            学生がフォーミュラーカーを作ることができております。
            皆様の温かいご支援のもと、より良いフォーミュラーカーを作れるよう日々努力いたします。
            Grandelfinoをなにとぞよろしくお願いします。
          </Typography>
          <Typography variant="body1" sx={{ pb: 1 }}>
            現在、この活動にご理解いただき、我々をご支援していただけるスポンサー様を募集しております。
            法人・個人を問わず、ご興味をもたれた方はご連絡いただければ幸いです。
            支援してくださる企業や団体、個人の方々には、毎月の活動報告書だけでなく、
            車両へのステッカー掲載やウェブサイトへの掲載などの広告活動を、微力ながら行なっています。
            以下に、スポンサー様との活動の一部を掲載しております。
          </Typography>
          <Grid container justify="center" alignItems="center" sx={{ pt: 3 }}>
            <Grid item xs={12} sm={8} alignItems="center">
              <Typography variant="h2" align="center">
                報告会
              </Typography>
              <Typography variant="body1">
                写真はスズキ株式会社様に、大会後の報告に伺ったときのものです。
                ご希望されたスポンサー様に、大会後に１シーズンの統括報告に伺っております。
                車両展示のために大会出場車両と共に伺うこともあります。
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <StaticImage
                src="../images/sponsor/suzuki.jpg"
                alt="suzuki"
                style={{ maxHeight: 300, margin: 5 }}
              />
            </Grid>
          </Grid>
          <Divider />
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} sm={8} alignItems="center">
              <Typography variant="h2" align="center">
                企画書・報告書
              </Typography>
              <Typography variant="body1">
                シーズンの初めに車両開発の企画書をお送りしております。
                また、月に一度の月例報告書、シーズンの終わりに統括報告書をお送りしております。
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <StaticImage
                src="../images/sponsor/report.jpg"
                alt="report"
                style={{ maxHeight: 300, margin: 5 }}
              />
            </Grid>
          </Grid>
          <Divider />
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} sm={8} alignItems="center">
              <Typography variant="h2" align="center">
                スポンサーパネルへの掲載
              </Typography>
              <Typography variant="body1">
                車両展示の際に使用するスポンサーパネルに、企業・団体様のロゴを掲載させていただいております。
                写真は京都工芸繊維大学のオープンキャンパスにて、車両展示を行った際のものです。
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <StaticImage
                src="../images/sponsor/panel.jpg"
                alt="panel"
                style={{ maxHeight: 300, margin: 5 }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Layout>
    </>
  )
}

export default SponsorShip

export const Head = () => <SEO title={'Sponsorship | Grandelfino'} />
