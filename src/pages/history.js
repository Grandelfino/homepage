import * as React from 'react'
import SEO from '../components/head'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { styled } from '@mui/material/styles'

import { Box } from '@mui/system'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const History = ({ data }) => {
  return (
    <>
      <Layout title={'Grandelfino - 大会成績'}>
        <Paper elevation={3} sx={{ p: 3 }}>
          {data.allContentfulHistory.edges.map(({ node }) => (
            <>
              <div id={node.year}>
                <Typography variant="h1">{node.year}</Typography>
                <Typography variant="h2">{node.title}</Typography>
                <ul>
                  <li>
                    開催日: {node.startDate} ～ {node.endDate}
                  </li>
                  <li>開催地: {node.place}</li>
                  <li>出場チーム数: {node.teams}</li>
                  <li>大会車両番号: {node.carNum}</li>
                  <li>参加車両: {node.carName}</li>
                </ul>
                <Typography variant="body1"></Typography>
                <Box sx={{ m: 1 }}>
                  <ScoreTableContainer>
                    <ScoreTableBody node={node} />
                  </ScoreTableContainer>
                  <AwardTableContainer>
                    <AwardTableBody node={node} />
                  </AwardTableContainer>
                </Box>
              </div>
            </>
          ))}
        </Paper>
      </Layout>
    </>
  )
}

const ScoreTableContainer = (props) => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="history table">
      <TableHead>
        <TableRow>
          <TableCell align="center" colSpan={2}>
            競技種目
          </TableCell>
          <TableCell align="center">内容</TableCell>
          <TableCell align="center">得点(満点)</TableCell>
          <TableCell align="center">順位</TableCell>
        </TableRow>
      </TableHead>
      {props.children}
    </Table>
  </TableContainer>
)

const ScoreTableBody = ({ node }) => {
  const total_score = (
    node.costScore +
    node.presentationScore +
    node.designScore +
    node.accScore +
    node.skidScore +
    node.autoScore +
    node.enduranceScore +
    node.efficiencyScore
  ).toFixed(2)
  const total_fullmark =
    node.costFullmark +
    node.presentationFullmark +
    node.designFullmark +
    node.accFullmark +
    node.skidFullmark +
    node.autoFullmark +
    node.enduranceFullmark +
    node.efficiencyFullmark

  return (
    <TableBody>
      <TableRow>
        <TableCell rowSpan={3}>静的審査</TableCell>
        <TableCell align="center">コスト</TableCell>
        <TableCell align="center">-</TableCell>
        <TableCell align="right">
          {node.costScore}({node.costFullmark})
        </TableCell>
        <TableCell align="right">{node.costRank}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="center">プレゼンテーション</TableCell>
        <TableCell align="center">-</TableCell>
        <TableCell align="right">
          {node.presentationScore}({node.presentationFullmark})
        </TableCell>
        <TableCell align="right">{node.presentationRank}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="center">デザイン</TableCell>
        <TableCell align="center">-</TableCell>
        <TableCell align="right">
          {node.designScore}({node.designFullmark})
        </TableCell>
        <TableCell align="right">{node.designRank}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell rowSpan={5}>動的審査</TableCell>
        <TableCell align="center">アクセラレーション</TableCell>
        <TableCell align="center">{node.accStatus}</TableCell>
        <TableCell align="right">
          {node.accScore}({node.accFullmark})
        </TableCell>
        <TableCell align="right">
          {node.accRank == 0 ? '-' : node.accRank}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="center">スキッドパッド</TableCell>
        <TableCell align="center">{node.skidStatus}</TableCell>
        <TableCell align="right">
          {node.skidScore}({node.skidFullmark})
        </TableCell>
        <TableCell align="right">
          {node.skidRank == 0 ? '-' : node.skidRank}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="center">オートクロス</TableCell>
        <TableCell align="center">{node.autoStatus}</TableCell>
        <TableCell align="right">
          {node.autoScore}({node.autoFullmark})
        </TableCell>
        <TableCell align="right">
          {node.autoRank == 0 ? '-' : node.autoRank}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="center">エンデュランス</TableCell>
        <TableCell align="center">{node.enduranceStatus}</TableCell>
        <TableCell align="right">
          {node.enduranceScore}({node.enduranceFullmark})
        </TableCell>
        <TableCell align="right">
          {node.enduranceRank == 0 ? '-' : node.enduranceRank}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="center">燃費</TableCell>
        <TableCell align="center">-</TableCell>
        <TableCell align="right">
          {node.efficiencyScore}({node.efficiencyFullmark})
        </TableCell>
        <TableCell align="right">
          {node.efficiencyRank == 0 ? '-' : node.efficiencyRank}
        </TableCell>
      </TableRow>
      <TableCell colSpan={3} align="center">
        総合成績
      </TableCell>
      <TableCell align="right">
        {total_score}({total_fullmark})
      </TableCell>
      <TableCell align="right">{node.totalRank}</TableCell>
    </TableBody>
  )
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

const AwardTableContainer = (props) => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: '100%' }} aria-label="history table">
      <TableHead>
        <TableRow>
          <TableCell
            align="center"
            size="small"
            sx={{ backgroundColor: 'black', color: 'white' }}
          >
            受賞一覧
          </TableCell>
        </TableRow>
      </TableHead>
      {props.children}
    </Table>
  </TableContainer>
)

const AwardTableBody = ({ node }) => {
  const awards = node.award
  let award_items = (
    <TableRow>
      <TableCell align="center" size="small">
        無し
      </TableCell>
    </TableRow>
  )
  if (awards != null) {
    award_items = awards.map((item) => (
      <StyledTableRow>
        <TableCell align="center" size="small">
          {item}
        </TableCell>
      </StyledTableRow>
    ))
  }
  return <TableBody>{award_items}</TableBody>
}

export const query = graphql`
  query {
    allContentfulHistory(sort: { order: DESC, fields: year }) {
      edges {
        node {
          accFullmark
          accRank
          accScore
          accStatus
          autoFullmark
          autoRank
          autoScore
          autoStatus
          award
          carName
          carNum
          costFullmark
          costRank
          costScore
          designFullmark
          designRank
          designScore
          efficiencyFullmark
          efficiencyRank
          efficiencyScore
          endDate(formatString: "Y年M月D日")
          enduranceFullmark
          enduranceRank
          enduranceScore
          enduranceStatus
          place
          presentationFullmark
          presentationRank
          presentationScore
          skidFullmark
          skidRank
          skidScore
          skidStatus
          startDate(formatString: "Y年M月D日")
          teams
          title
          totalRank
          year
        }
      }
    }
  }
`

export default History

export const Head = () => <SEO title={'History | Grandelfino'} />
