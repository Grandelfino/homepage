import * as React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/head'
import Layout from '../components/layout'
import { Typography } from '@mui/material'

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
}

const NotFoundPage = () => {
  return (
    <Layout>
      <Typography variant="h1">ページが見つかりませんでした</Typography>
      <Typography>
        すみません😔, お探しのページは見つかりませんでした.
        <br />
        {process.env.NODE_ENV === 'development' ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">ホームへ</Link>.
      </Typography>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <SEO title={'NotFound | Grandelfino'} />
