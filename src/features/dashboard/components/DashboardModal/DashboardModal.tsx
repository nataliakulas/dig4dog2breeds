import { Breed } from 'features/dashboard/types';
import { Modal, ModalProps } from 'common/components';
import { renderBreed } from '../../utils/presenters';
import { StyledDashboardModal, StyledButton, StyledHeader } from './styles';

const DashboardModal = ({ breed, open, onClose }: { breed: Breed } & ModalProps) => (
  <Modal open={open} onClose={onClose}>
    <StyledDashboardModal>
      <StyledHeader>{renderBreed(breed.name)}</StyledHeader>
      <StyledButton type="button" onClick={onClose}>
        Close
      </StyledButton>
    </StyledDashboardModal>
  </Modal>
);

export default DashboardModal;
