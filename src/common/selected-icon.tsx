import styled from "@emotion/styled";

const IconContainer = styled.div<{ size: number; iconColour: string }>`
  background-color: ${({ iconColour }) => `${iconColour}`};
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: 50%;
  box-shadow: ${({ iconColour }) => `0 0 10px ${iconColour}`};
`;

export const SelectedIcon = ({ iconColour }: { iconColour: string }) => (
  <IconContainer size={25} iconColour={iconColour} />
);
