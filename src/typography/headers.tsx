import styled from '@emotion/styled'

const dynamicColour = ({ textColour = 'white' }) => textColour

type TypographyParams = { textColour?: string }

export const H1 = styled.h1<TypographyParams>`
  font-size: 2.4rem;
  font-weight: bold;
  color: ${dynamicColour};
`

export const H2 = styled.h2<TypographyParams>`
  font-size: 2rem;
  font-weight: bold;
  color: ${dynamicColour};
`

export const H3 = styled.h3<TypographyParams>`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${dynamicColour};
`

export const H4 = styled.h3<TypographyParams>`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${dynamicColour};
`

export const P = styled.p<TypographyParams>`
  font-size: 1.2rem;
  color: ${dynamicColour};
`
