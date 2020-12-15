import { Modal, ModalProps } from 'common/components';
import { renderBreed } from '../../utils/presenters';
import { StyledDashboardModal, StyledButton, StyledHeader } from './styles';

const DashboardModal = ({ breed, open, onClose }: { breed: string } & ModalProps) => (
  <Modal open={open} onClose={onClose}>
    <StyledDashboardModal>
      <StyledHeader>{renderBreed(breed)}</StyledHeader>
      <StyledButton type="button" onClick={onClose}>
        Close
      </StyledButton>
    </StyledDashboardModal>
  </Modal>
);

export default DashboardModal;
