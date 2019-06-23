import React, { Component } from 'react'
import menu from './menuConfig'
import { arrayToTree } from '@utils'
import Menu from '@components/Menu/Menu'
import MenuItem from '@components/Menu/MenuItem'

export default class SiderMenu extends Component {
    state = {
      selectedKey: 2
    }

    switchPage = (selectedKey) => {
      this.setState({
        selectedKey
      })
    }

    getMenus = (menuTree, selectedKey) => {
      return menuTree.map(item => {
        const { id, icon } = item
        return (
          <MenuItem key={String(id)} switchPage={this.switchPage} {...item} isActive={selectedKey === id} >
            <i className={`cruisefont ${icon}`} />
            <span>{item.title}</span>
          </MenuItem>
        )
      })
    }

    render () {
      this.menuTree = arrayToTree(menu)
      // 寻找选中路由
      const { selectedKey } = this.state
      const menuItems = this.getMenus(this.menuTree, selectedKey)
      return (
        <Menu
          className='menu'
        >
          { menuItems }
        </Menu>
      )
    }
}
