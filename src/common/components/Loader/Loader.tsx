import { createPortal } from 'react-dom';
import { rootElement } from 'index';
import { StyledLoader, StyledBall } from './styles';

const Loader = ({ visible }: { visible: boolean }) =>
  visible
    ? createPortal(
        <StyledLoader>
          <StyledBall />
        </StyledLoader>,
        // @ts-ignore
        rootElement,
      )
    : null;

export default Loader;
