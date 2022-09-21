import * as React from 'react'
import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Collapse from '@mui/material/Collapse'
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports'
import PlaceIcon from '@mui/icons-material/Place'
import Home from '@mui/icons-material/Home'
import Group from '@mui/icons-material/Group'
import Timeline from '@mui/icons-material/Timeline'
import Person from '@mui/icons-material/Person'
import Assignment from '@mui/icons-material/Assignment'
import Business from '@mui/icons-material/Business'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Policy from '@mui/icons-material/Policy'
import Typography from '@mui/material/Typography'
import { Link } from 'gatsby'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'
import PropTypes from 'prop-types'

function HideOnScroll(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

export default function NavBar(props) {
  const [isOpen, setOpen] = useState(false)
  const [saeOpen, setsaeOpen] = useState(false)
  const [sponsorOpen, setsponsorOpen] = useState(false)

  const toggleDrawer = () => {
    setOpen(!isOpen)
  }
  const closeDrawer = () => {
    setOpen(false)
  }
  const toggleSAE = () => {
    setsaeOpen(!saeOpen)
  }

  const toggleSponsor = () => {
    setsponsorOpen(!sponsorOpen)
  }
  const sideList = (
    <Box sx={{ minWidth: 300 }}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={<Typography style={{ fontSize: '1rem' }}>Home</Typography>}
          />
        </ListItem>
        <ListItem button component={Link} to="/about_us">
          <ListItemIcon>
            <Group />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography style={{ fontSize: '1rem' }}>チーム紹介</Typography>
            }
          />
        </ListItem>
        <ListItem button component={Link} to="/history">
          <ListItemIcon>
            <Timeline />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography style={{ fontSize: '1rem' }}>大会成績</Typography>
            }
          />
        </ListItem>
        <ListItem button component={Link} to="/member">
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography style={{ fontSize: '1rem' }}>メンバー</Typography>
            }
          />
        </ListItem>
        <ListItem button component={Link} to="/machines">
          <ListItemIcon>
            <SportsMotorsportsIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography style={{ fontSize: '1rem' }}>マシン紹介</Typography>
            }
          />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="https://blog.grandelfino.net/"
          target="_blank"
        >
          <ListItemIcon>
            <Assignment />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography style={{ fontSize: '1rem' }}>活動記録</Typography>
            }
          />
        </ListItem>
        <ListItem button component={Link} to="/contact">
          <ListItemIcon>
            <PlaceIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography style={{ fontSize: '1rem' }}>お問合せ</Typography>
            }
          />
        </ListItem>
        <ListItem button onClick={toggleSponsor}>
          <ListItemIcon>
            <Business />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography style={{ fontSize: '1rem' }}>
                スポンサー紹介
              </Typography>
            }
          />
          {sponsorOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Box sx={{ paddingLeft: 2 }}>
          <Collapse in={sponsorOpen} timeout="auto" unmountOnExit>
            <List>
              <ListItem button component={Link} to="/sponsor">
                <ListItemText
                  primary={
                    <Typography style={{ fontSize: '1rem' }}>
                      スポンサー一覧
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem button component={Link} to="/sponsorship">
                <ListItemText
                  primary={
                    <Typography style={{ fontSize: '1rem' }}>
                      スポンサーシップについて
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Collapse>
        </Box>
        <ListItem button onClick={toggleSAE}>
          <ListItemText primary="Formula SAE" />
          {saeOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Box sx={{ paddingLeft: 2 }}>
          <Collapse in={saeOpen} timeout="auto" unmountOnExit>
            <List>
              <ListItem button component={Link} to="/about_SAE">
                <ListItemText
                  primary={
                    <Typography style={{ fontSize: '1rem' }}>
                      学生フォーミュラとは
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem button component={Link} to="/static">
                <ListItemText
                  primary={
                    <Typography style={{ fontSize: '1rem' }}>
                      静的審査
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem button component={Link} to="/dynamic">
                <ListItemText
                  primary={
                    <Typography style={{ fontSize: '1rem' }}>
                      動的審査
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Collapse>
        </Box>
        <ListItem button component={Link} to="/policy">
          <ListItemIcon>
            <Policy />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography style={{ fontSize: '1rem' }}>
                サイトポリシー
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Box>
  )
  return (
    <Box sx={{ flexGrow: 1 }}>
      <HideOnScroll {...props}>
        <AppBar position="fixed">
          <Toolbar>
            <Box mr={2}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Typography variant="h4" sx={{ flexGrow: 1 }}>
              {props.title}
            </Typography>
            <Drawer open={isOpen} onClose={closeDrawer}>
              {sideList}
            </Drawer>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </Box>
  )
}
