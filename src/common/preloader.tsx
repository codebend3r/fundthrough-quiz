import styled from '@emotion/styled'
import { P } from '../typography/headers'

const PreloaderContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  align-content: stretch;
  align-items: center;
`

const PreloaderText = styled(P)`
  font-size: 4rem;
  color: white;
  text-align: center;
`

export const Preloader = () => (
  <PreloaderContainer>
    <PreloaderText>Loading funiness...</PreloaderText>
  </PreloaderContainer>
)
