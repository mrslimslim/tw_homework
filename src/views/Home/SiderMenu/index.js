import React, { Component } from 'react'
import pathToRegexp from 'path-to-regexp'
import menu from './menu'
import { arrayToTree, queryArray } from '@utils'
import Menu from '@components/Menu/Menu'
import MenuItem from '@components/Menu/MenuItem'

export default class SiderMenu extends Component {
    getPathArray = (array, current) => {
      const result = [String(current.id)]
      const getPath = (item) => {
        if (item && item.pid) {
          result.unshift(String(item.pid))
          getPath(queryArray(array, String(item.pid), 'id'))
        }
      }
      getPath(current)
      return result
    }

    goto = ({ key }) => {
      const { history } = this.props.routerStore
      const selectedMenu = menu.find(item => String(item.id) === key)
      if (selectedMenu && selectedMenu.path && selectedMenu.path !== this.currentRoute) {
        history.push(selectedMenu.path)
      }
    }

    getMenus = (menuTree) => {
      return menuTree.map(item => {
        const { id, ...rest } = item
        return (
          <MenuItem key={String(id)} {...rest}>
            {item.icon && <i className='iconfont icon-emojiflashfill' />}
            <span>{item.title}</span>
          </MenuItem>
        )
      })
    }

    render () {
      this.levelMap = {}
      this.menuTree = arrayToTree(menu)
      const menuItems = this.getMenus(this.menuTree)
      // 寻找选中路由
      let currentMenu = null
      for (const item of menu) {
        if (item.path && pathToRegexp(item.path).exec(this.currentRoute)) {
          currentMenu = item
          break
        }
      }
      let selectedKeys = null
      if (currentMenu) {
        selectedKeys = this.getPathArray(menu, currentMenu)
      }
      if (!selectedKeys) {
        selectedKeys = ['1']
      }
      return (
        <Menu
          className='menu'
          mode='inline'
          selectedKeys={selectedKeys}
          {...this.menuProps}
        >
          { menuItems }
        </Menu>
      )
    }
}
