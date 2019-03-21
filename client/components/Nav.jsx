import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Menu from '../containers/Menu'

export class Nav extends Component {
  render() {
    return (

         <nav>
           <AppBar position='static'>
            <ToolBar>
              <Typography variant='title' color='inherit'>
                Todo List
              </Typography>
            </ToolBar>
            <Menu />
           </AppBar>
         
            {/* <div className='nav-links'>
              <Link className='link-text' to='/completed'> Completed </Link>
              <Link className='link-text' to='/priority/:priority' > Priority </Link>
              <Link className='link-text' to='/category/:category' > Categories </Link>
              <Link className='link-text' to='/new' > Add Todo </Link>
            </div> */}
        </nav>

     
    )
  }
}


export default Nav