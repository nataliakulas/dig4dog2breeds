import { Modal, ModalProps } from 'common/components';
import { StyledDashboardModal, StyledButton } from './styles';

const DashboardModal = ({ open, onClose }: ModalProps) => (
  <Modal open={open} onClose={onClose}>
    <StyledDashboardModal>
      <StyledButton type="button" onClick={onClose}>
        Close
      </StyledButton>
    </StyledDashboardModal>
  </Modal>
);

export default DashboardModal;
