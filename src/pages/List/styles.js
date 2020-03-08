import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  margin-top: 100px;
`

export const Item = styled(motion.div)`
  background: #3b5998;
  border-radius: 5px;
  height: 50px;
  margin: 10px auto;
  width: 300px;
`
