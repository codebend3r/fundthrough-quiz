import styled from '@emotion/styled'
import { useGameScore } from '../store/store'
import { Punchline } from '../types'
import { shuffleArray } from '../utils/arrayUtils'
import PunchlineCard from '../punchline-card/punchline-card-index'
import { useMemo } from 'react'
import { H3 } from '../typography/headers'
import { TERTIARY_COLOUR } from '../constants/colours'

const GridContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  padding: 0;
  align-content: start;
`

const PunchlinesContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  padding: 0;
`

export const Setups = () => {
  const punchlinesList: Punchline[] = useGameScore(
    (state) => state.punchlinesList
  )
  const punchlinesListShuffled: Punchline[] = useMemo(
    () => shuffleArray<Punchline>(punchlinesList),
    [punchlinesList]
  )

  return (
    <GridContainer>
      <H3 textColour={TERTIARY_COLOUR}>Punchlines</H3>
      <PunchlinesContainer>
        {punchlinesListShuffled.map(({ id, punchline }) => (
          <PunchlineCard
            key={`${id}-punchline`}
            id={id}
            punchline={punchline}
          />
        ))}
      </PunchlinesContainer>
    </GridContainer>
  )
}

export default Setups
