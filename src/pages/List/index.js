import React, { useState } from 'react'
import { useAnimation } from 'framer-motion'

import { Container, Item } from './styles'

const List = () => {
  const [selectedID, setSelected] = useState(null)
  const controls = useAnimation()

  const items = ['a', 'b', 'c', 'd', 'e']

  controls.start('hidden')

  const handleSelectedItem = item => {
    console.log(item)

    controls.start({
      height: '100px',
      background: '#5e77aa',
      transition: { duration: 0.3 },
    })
  }

  return (
    <Container>
      {items.map(item => (
        <Item
          key={item}
          id={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          selected={selectedID === item}
          onClick={() => handleSelectedItem(item)}
          animate={controls}
        />
      ))}
    </Container>
  )
}

export default List
