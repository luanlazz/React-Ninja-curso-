'use strict'

import React, { Component } from 'react'
import { NavLink, Route, Switch, Prompt, withRouter } from 'react-router-dom'

import './css/style.css'

const Link = (props) => (
  // <Route>
  //   {({ match, location, history }) => (
  //     <a href={props.to} onClick={(e) => {
  //       e.preventDefault()
  //       history.push(props.to)
  //     }}>{props.children}</a>
  //   )}
  // </Route>
  <NavLink activeStyle={{ color: 'red' }} {...props} />
)

// const Link = (props) => (
//   <Route path={props.to} exact={props.exact}>
//     {({ match, history }) => (
//       <a href={props.to} style={match ? { color: 'red' } : null} onClick={(e) => {
//         e.preventDefault()
//         history.push(props.to)
//        }}
//       >{props.children}</a>
//     )}
//   </Route>
// )

const ButtonBack_ = ({ history }) => (
  <button onClick={(e) => history.goBack()}>{'<- Voltar'}</button>
)
const ButtonBack = withRouter(ButtonBack_)
console.log('component puro:', ButtonBack.WrappedComponent)

const ButtonForward_ = ({ history }) => (
  <button onClick={(e) => history.goForward()}>{'Avançar ->'}</button>
)
const ButtonForward = withRouter(ButtonForward_)

class MainApp extends Component {
  render () {
    return (
      <div>
        <ul>
          <li><ButtonBack /></li>
          <li><ButtonForward /></li>
        </ul>
        <ul>
          <li><Link to='/' exact>Home</Link></li>
          <li><Link to='/sobre'>Sobre</Link></li>
          <li><Link to='/contato'>Contato</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
          <li><a href='#informacoes-do-site'>Informações do site</a></li>
          <li><Link to='/voltar-para-home'>Voltar para home</Link></li>
          <li><Link to='/cadastro'>Cadastro</Link></li>
        </ul>
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <Redirect from='/voltar-para-home' to='/' /> */}
          {/* <Route path='/voltar-para-home' render={() => <Redirect to='/' />} /> */}
          <Route path='/(sobre|contato)' component={Page} />
          <Route path='/blog' component={Blog} />
          <Route path='/cadastro' component={Register} />
          <Route component={Error404} />
        </Switch>
        <div id='informacoes-do-site' style={{ margin: '1000px 0' }}>
          <h2>Informações do site</h2>
        </div>
        <Route path='/sobre'>
          {({ match }) => (
            <pre>Estou na pagina sobre? {`${!!match}`}</pre>
          )}
        </Route>
      </div>
    )
  }
}

const Register = () => (
  <Prompt when message='Navegação bloqueada!' />
)

const Error404 = () => (
  <h2>Pagina não encontrada</h2>
)

const Home = ({ match, location, history }) => (
  <div>
    {console.log('Home location:', location)}
    {console.log('Home history:', history)}
    {/* {console.log('Location search:', location.search.replace('?', '').split('&').reduce((acc, item) => {
    const [key, value] = item.split('=')
    if (acc[key]) {
      acc[key] = [acc[key]].concat(value)
    } else {
      acc[key] = value
    }
    return acc
  }, {}))} */}
    <h1>Home</h1>
  </div>
)

const Page = ({ match, location, history }) => (
  <div>
    {console.log('Page history:', history)}
    <h1>{match.url}</h1>
  </div>
)

const numberOfPosts = 2

const Blog = ({ match, location, history }) => (
  <div>
    {console.log('Blog history:', history)}
    <h1>Blog</h1>
    <ul>
      <li><Link to='/blog/post-1'>Post 1</Link></li>
      <li><Link to='/blog/post-2'>Post 2</Link></li>
    </ul>
    <Switch>
      <Route exact path='/blog' render={(props) => <NoPosts numberOfPosts={numberOfPosts} {...props} />} />
      <Route path='/blog/:post(post-[12])' component={Post} />
      <Route component={Post404} />
    </Switch>
  </div>
)

const Post404 = ({ match, location, history }) => (
  <div>
    {console.log('Post 404 history', history)}
    <h1>Esse post não existe</h1>
  </div>
)

const Post = ({ match, location, history }) => (
  <div>
    {console.log('Post history:', history)}
    <h2>Post: {match.params.post}</h2>
  </div>
)

const NoPosts = ({ numberOfPosts }) => (
  <p>Selecione um dos {numberOfPosts} posts</p>
)

export default withRouter(MainApp)
