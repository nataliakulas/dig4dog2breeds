import styled from 'styled-components';
import color from 'common/styles/colors';

export const StyledLoader = styled.div`
  position: fixed;
  top: 6rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 101;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${color.opacity};
`;

export const StyledBall = styled.div`
  @keyframes ball {
    0%,
    100% {
      animation-timing-function: cubic-bezier(0.45, 0, 0.9, 0.55);
    }
    0% {
      transform: translate(0, -10rem);
    }
    50% {
      transform: translate(0, 0);
      animation-timing-function: cubic-bezier(0, 0.45, 0.55, 0.9);
    }
    100% {
      transform: translate(0, -10rem);
    }
  }

  width: 5rem;
  height: 5rem;

  border-radius: 50%;
  background: ${color.orange};
  animation: ball 1s linear infinite;
`;
