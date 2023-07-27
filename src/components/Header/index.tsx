import React from 'react'
import * as C from './styles'

type Props = {}

const Header = (props: Props) => {
  return (
    <C.Container>
      <h1>Cadastro</h1>
      <p>Faça seu cadastro na lista.</p>
    </C.Container>
  )
}

export default Header