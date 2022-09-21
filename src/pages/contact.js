import * as React from 'react'
import SEO from '../components/head'
import Layout from '../components/layout'

import { Paper, Typography, Box } from '@mui/material'

const contact = () => {
  return (
    <>
      <Layout title={'Grandelfino - お問い合わせ'}>
        <Paper sx={{ padding: 3 }}>
          <Typography variant="h2">活動場所</Typography>
          <Typography variant="body1">
            Grandelfinoは主に京都工芸繊維大学内の学習支援施設で活動しております。
            学習支援施設１階の101,102号室で活動しておりますので、見学など御用の方はノックしてください。
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={2}
            mb={2}
          >
            <Map />
          </Box>
          <Typography variant="h2">お問い合わせ</Typography>
          <Typography>
            Grandelfinoの活動やウェブサイトに対してのお問い合わせ、ご意見、ご指摘などは下記の内容をご了承の上、
            <a href={'mailto:' + 'grandelfino@kit.ac.jp'}>
              grandelfino@kit.ac.jp
            </a>
            までお寄せください。
          </Typography>
          <Typography variant="h3">ご注意事項</Typography>
          <Typography variant="body1">
            <ul>
              <li>
                皆様からのお問い合わせをいただいた際に我々が取得した個人情報は、皆様へのご連絡・ご回答をさせていただく以外の目的には使用いたしません。
              </li>
              <li>
                送信されるメールの内容が
                我々に関わりのない営利目的や悪戯を含んだメールの場合、受信することをお断りいたします。
              </li>
              <li>
                ご連絡・ご回答につきまして、原則的にチームメールアドレス
                <a href={'mailto:' + 'grandelfino@kit.ac.jp'}>
                  grandelfino@kit.ac.jp
                </a>
                での返信とさせていただきますが、お問い合せの内容により、電話や担当者個人のメールアドレスなどの方法で
                ご連絡させていただく場合がございますのでご了承ください。
              </li>
              <li>
                お問い合わせ内容の確認などを行う場合、回答に時間がかかることがございます。また、いただいたお問い合せに対して、回答を差し上げられない場合がございますのでご了承ください。
              </li>
            </ul>
          </Typography>
        </Paper>
      </Layout>
    </>
  )
}

const Map = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26133.35813559401!2d135.76448184572882!3d35.03999048728186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001083a678e4a47%3A0x3d8dffcd82f43cff!2z5a2m55Sf44OV44Kp44O844Of44Ol44Op44OX44Ot44K444Kn44Kv44OIIEdyYW5kZWxmaW5v!5e0!3m2!1sja!2sjp!4v1599225838707!5m2!1sja!2sjp"
    width="90%"
    height="450"
    frameborder="0"
    style={{ border: 0 }}
    allowfullscreen=""
    aria-hidden="false"
    tabindex="0"
  ></iframe>
)

export default contact

export const Head = () => <SEO title={'Contact | Grandelfino'} />
