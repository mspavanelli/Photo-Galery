import styled from 'styled-components'

export const Container = styled.div`
  max-width: 90%;
  margin: auto;

  h1 {
    font-weight: normal;
    margin: 20px 0;
  }
`

export const Pictures = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);

  img {
    max-width: 100%;
  }
`
