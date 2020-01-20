'use strict'

import React from 'react'

import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'

const App = () => (
  <div className='app'>
    <Search />
    <UserInfo />
    <Actions />

    <Repos className='repos' title='Repositories' repos={[
      { name: 'repositorie', link: 'https://api.github.com/users/luanlazz/starred' }
    ]} />
    
    <Repos className='starred' title='Favorites' repos={[
      { name: 'repositorie', link: 'https://api.github.com/users/luanlazz/starred' }
    ]} />

  </div>
)

export default App
