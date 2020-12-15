import styled from 'styled-components';
import color from 'common/styles/colors';

export const StyledDashboardButton = styled.button`
  height: 10rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.8rem;
  font-weight: 700;
  background-color: ${color.yellow};
  border: 0.2rem solid ${color.black};

  margin: 1rem;
  padding: 2rem 4rem;

  cursor: pointer;

  :hover {
    background-color: ${color.orange};
  }
`;
