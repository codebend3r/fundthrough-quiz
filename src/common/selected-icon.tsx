import styled from '@emotion/styled'
import { P } from '../typography/headers'

const IconContainer = styled.div<{ size: number; iconColour: string }>`
  background-color: ${({ iconColour }) => `${iconColour}`};
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: 50%;
  box-shadow: ${({ iconColour }) => `0 0 10px ${iconColour}`};
  position: relative;
`

const IconNumber = styled(P)`
  font-size: 2rem;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow: 0 0 8px black;
`

export const SelectedIcon = ({
  iconColour,
  correctCount,
}: {
  iconColour: string
  correctCount: number
}) => (
  <IconContainer size={25} iconColour={iconColour}>
    <IconNumber>{!!correctCount ? correctCount : ''}</IconNumber>
  </IconContainer>
)
