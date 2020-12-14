import styled from 'styled-components';
import color from 'common/styles/colors';

export const StyledHeader = styled.header`
  height: 6rem;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;

  color: ${color.white};
  font-size: 2rem;
  background-color: ${color.black};

  padding: 0 5rem;

  ::selection {
    color: ${color.black};
    background-color: ${color.white};
  }
`;
