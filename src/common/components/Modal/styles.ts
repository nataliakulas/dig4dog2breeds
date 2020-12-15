import styled from 'styled-components';
import color from 'common/styles/colors';
import closeWhite from 'common/assets/close/white.svg';
import closeOrange from 'common/assets/close/orange.svg';

export const style = {
  overlay: {
    zIndex: 100,
    backgroundColor: 'rgba(7, 7, 7, 0.75)',
  },
  content: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    backgroundColor: 'transparent',
    overflow: 'auto',
    borderRadius: 'none',
    padding: 0,
  },
};

export const StyledModal = styled.div`
  width: 55rem;
  min-height: 50vh;

  position: relative;

  display: flex;

  background-color: ${color.yellow};

  padding: 4rem;
`;

export const StyledButtonClose = styled.button`
  width: 3rem;
  height: 3rem;

  position: absolute;
  top: 2rem;
  right: 2rem;

  background-color: ${color.black};
  background-image: url(${closeWhite});
  background-size: cover;
  border-radius: 50%;
  border: none;

  cursor: pointer;

  :hover {
    background-image: url(${closeOrange});
  }
`;
