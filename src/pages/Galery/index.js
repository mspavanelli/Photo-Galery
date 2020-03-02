import React from 'react'

import FoundationII from '../../assets/images/fundacao-imperio.jpg'
import Foundation from '../../assets/images/fundacao.jpg'
import FoundationIII from '../../assets/images/segunda-fundacao.jpg'
import { Container, Pictures } from './styles'

const Galery = () => (
  <Container>
    <h1>Galery</h1>
    <Pictures>
      <img src={Foundation} alt="Foundation" />
      <img src={FoundationII} alt="Foundation II" />
      <img src={FoundationIII} alt="Foundation III" />
    </Pictures>
  </Container>
)

export default Galery
