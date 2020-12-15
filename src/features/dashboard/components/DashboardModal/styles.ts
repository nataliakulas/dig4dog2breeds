import styled from 'styled-components';
import color from 'common/styles/colors';

export const StyledDashboardModal = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled.button`
  width: 10rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${color.white};
  font-size: 1.6rem;
  font-weight: 700;
  background-color: ${color.black};
  border: 0.2rem solid ${color.black};

  margin: 1rem;

  cursor: pointer;

  :hover {
    color: ${color.orange};
  }
`;

export const StyledHeader = styled.header`
  color: ${color.black};
  font-size: 2rem;
  font-weight: 700;
`;
