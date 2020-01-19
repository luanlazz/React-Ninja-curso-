'use strict'

import React, { Component } from 'react'
// import Button from './button'
// import LikeButton from './like-button'
// import Square from './square'
// import Timer from './timer'
// import Title from './title'

class App extends Component {
  // constructor () {
  //   super()
  //   this.state = {
  //     text: 'Luan'
  //   }
  // }

  // render () {
  //   return (
  //     <div className='container' onClick={() => this.setState({
  //       text: 'Outro texto'
  //     })}>
  //       {this.state.text}

  //       <Title name='Luan' lastName='Lazzari' />
  //       {['blue', 'red', 'green'].map((color, index) => (
  //         <Square key={index} color={color} />
  //       ))}
  //       <Square color='Blue' />
  //       <Button>
  //         <span>Texto com span</span>
  //       </Button>
  //       <LikeButton/>

  //     </div>
  //   )
  // }

  constructor () {
    console.log('constructor')
    super()
    this.state = {
      // color: 'green'
      // time: 0,
      // showTimer: true,
      // value: 'valor inicial',
      checked: false,
      // select: 2,
      showContent: false
    }
  }

  componentWillMount () {
    // console.log('componentWillMount')
  }

  componentDidMount () {
    // console.log('componentDidMount')
  }

  render () {
    // console.log('render')
    return (
      <div>
        {/* <Square color={this.state.color}/>

        {['red', 'green', 'blue'].map((color) => (
          <Button key={color} handleClick={() => this.setState({ color })}>{color}</Button>
        ))} */}

        {/* <Timer time={this.state.time}/>

        <button onClick={() => this.setState({ time: this.state.time + 10 })}>Change props</button> */}

        {/* <Button handleClick={() => console.log('clicou')}>
          clique em mim
        </Button> */}

        {/* <form onSubmit={(e) => {
                e.preventDefault() 
                console.log('event', e)}}
              onChange={(e) => {
                console.log('name', e.target.name)
                console.log('value', e.target.value)
              }}>
          <input type='text' value={this.state.value} onChange={(e) => {
            // console.log(e.target)
            this.setState({
              value: e.target.value
            })
          }} />
          Evitar <input type='text' defaultValue='Valor inicial' />

          <br />
          <label>
            <input type='checkbox' value='my-checkbox' checked={this.state.checked} onChange={(e) => {
              this.setState({ checked: e.target.checked })
            }} />
            checkbox
          </label>

          <br />
          <input type='radio' name='rd' value='1' defaultChecked />Radio 1
          <input type='radio' name='rd' value='2' />Radio 2

          <br />
          <select value={this.state.select} onChange={(e) => {
            this.setState({ select: e.target.value })
          }}>
            <option value='1'>Opção 1</option>
            <option value='2'>Opção 2</option>
            <option value='3'>Opção 3</option>
          </select>

          <br />
          <textarea defaultValue='text teste' name='text' />

          <br />
          <button type='submit'>Enviar</button>
        </form> */}
        <div>
          <label>
            <input type='checkbox' 
              checked={this.state.checked} 
              onChange={() => { 
                this.setState({ 
                  checked: !this.state.checked 
                }, () => {
                  this.setState({
                    showContent: this.state.checked
                  })
                }) 
              }} /> Mostra conteudo            
          </label>

          {this.state.showContent && <div>Olha eu aqui</div>}
        </div>
      </div>
    )
  }
}

export default App
