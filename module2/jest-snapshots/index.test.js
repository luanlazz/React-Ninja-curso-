'use strict'

const respostaQueVemDoServidor = () => [
  'react',
  'javascript',
  'node'
]

it('Test snapshot', () => {
  expect(respostaQueVemDoServidor()).toMatchSnapshot()
})
