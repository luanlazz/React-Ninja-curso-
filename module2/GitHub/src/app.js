'use strict'

import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'

import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false,
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  getGitHubApiUrl (username, type) {
    const internalUser = username ? `${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users/${internalUser}${internalType}`
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      this.setState({ isFetching: true })
      ajax().get(this.getGitHubApiUrl(value)).then((result) => {
        this.setState({
          userinfo: {
            username: result.name,
            photo: result.avatar_url,
            login: result.login,
            repos: result.public_repos,
            following: result.following,
            followers: result.followers
          },
          repos: [],
          starred: []
        })
      })
        .always(() => this.setState({ isFetching: false }))
    }
  }

  getRepos (type) {
    return (e) => {
      ajax().get(this.getGitHubApiUrl(this.state.userinfo.login, type)).then((repos) => {
        this.setState({
          [type]: repos.map((repo) => ({
            name: repo.name,
            link: repo.html_url
          }
          ))
        })
      })
    }
  }

  render () {
    return <AppContent
      {...this.state}
      handleSearch={this.handleSearch}
      getRepos={this.getRepos('repos')}
      getStarred={this.getRepos('starred')}
    />
  }
}

export default App
