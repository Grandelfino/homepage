import * as React from 'react'
import SEO from '../components/head'
import Layout from '../components/layout'

import { Paper, Typography } from '@mui/material'

const Policy = () => {
  return (
    <>
      <Layout title={'Grandelfino - サイトポリシー'}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h1">サイトポリシー</Typography>
          <Typography variant="h2">
            取得情報・個人情報の取り扱いと管理
          </Typography>
          <Typography variant="body1">
            当サイトを閲覧されることで、アクセス解析やサーバーログにより当方が
            IPアドレスやご利用されているブラウザなどを含む個人情報を収集することがございます。
          </Typography>
          <Typography variant="body1">
            Grandelfinoでは、当サイトで収集した情報について、
            法令に基づく開示請求があった場合や本人の同意が得られた場合を除き、
            第三者に提供いたしません。
            また、当サイトへ何らかの不利益が生じた場合への一時的な対策のための利用や
            当サイトの改善に利用する場合を除き、
            一切の目的で使用されることはありません。
          </Typography>
          <Typography variant="body1">
            Grandelfinoは、当サイトで収集した情報を適切かつ慎重に管理いたします。
            また、情報の漏えい、滅失又はき損の防止その他収集した情報の適切な管理のために
            必要な措置を講じます。
          </Typography>
          <Typography variant="h2">リンクについて</Typography>
          <Typography variant="body1">
            当サイトへのリンクは原則自由としております。
            リンクをして頂く際にご連絡等の必要はありません。
            但し、以下のいずれかに該当する、または該当する可能性のあるリンクはご遠慮ください。
          </Typography>
          <Typography variant="body1">
            <ul>
              <li>
                Grandelfino、または他者を誹謗中傷したり、信用の失墜を意図する内容を含んだホームページ
              </li>
              <li>
                Grandelfino、または他者の持つ著作権、知的財産権、財産、プライバシーの侵害を意図する内容を含んだホームぺージ
              </li>
              <li>
                上記各項目の他、法律、条例、規則を含む法令または公序良俗に違反する行為、当サイトの運営を妨害行為するおそれのあるホームページ
              </li>
            </ul>
          </Typography>
          <Typography variant="body1">
            なお、当サイト内コンテンツのURLは、予告なく変更または削除することがありますので、あらかじめご了承ください。
          </Typography>
          <Typography variant="h2">著作権について</Typography>
          <Typography variant="body1">
            当サイトに掲載されているデジタルコンテンツ（文章、図画、写真、各種データ等）の著作権は、
            "Grandelfino"または各コンテンツの著作権者が保有しています。
            当サイトのコンテンツは、著作権法の定める範囲内での引用を除き、
            複製・転載・転送・加工、その他これに類する行為の対象とすることはできません。
            ご注意ください。 また、画像の一部を「公益社団法人
            自動車技術会」様よりご提供いただきました。
            この場を借りてお礼申し上げます。
          </Typography>
          <Typography variant="h2">免責事項</Typography>
          <Typography variant="body1">
            我々Grandelfinoは当サイトの内容（コンテンツ）に関して、
            十分に検討・確認を行なっておりますが、その正確性や完全性、確実性、安全性、
            特定の目的に対しての適合性などについて、いかなる保証を行なうものではありません。
            コンテンツのご利用により、直接または間接であるを問わず、
            万が一何らかの問題、損害・損失が発生した場合でも、
            Grandelfinoは一切の責任を負いません。
          </Typography>
        </Paper>
      </Layout>
    </>
  )
}

export default Policy

export const Head = () => <SEO title={'Policy | Grandelfino'} />
