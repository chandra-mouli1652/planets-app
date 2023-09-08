import styled from 'styled-components/macro'

export const PlanetContainer = styled.div`
  flex-direction: column;
  display: flex;
`
export const Image = styled.img`
  height: 250px;
  width: 250px;
  @media screen and (min-width: 768px) {
    height: 292px;
    width: 405px;
  }
`

export const Name = styled.h1`
  font-size: 20px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

export const Description = styled.p`
  font-size: 16px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`
