import ReactModal from 'react-modal';
import { ModalProps } from './types';
import { useBodyLockScroll } from 'common/hooks';
import { style, StyledButtonClose, StyledModal } from './styles';

ReactModal.setAppElement('#root');

const Modal = ({ children, open, onClose }: ModalProps) => {
  useBodyLockScroll(open);

  return (
    <ReactModal
      isOpen={open}
      onRequestClose={onClose}
      // @ts-ignore
      style={style}
    >
      <StyledModal>
        <StyledButtonClose onClick={onClose} />
        {children}
      </StyledModal>
    </ReactModal>
  );
};

export default Modal;
