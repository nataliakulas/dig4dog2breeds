import { Breed } from 'features/dashboard/types';
import { Modal, ModalProps } from 'common/components';
import { renderBreed } from '../../utils/presenters';
import { StyledDashboardModal, StyledButton, StyledHeader, StyledImage } from './styles';

const DashboardModal = ({ breed, open, onClose }: { breed: Breed } & ModalProps) => (
  <Modal open={open} onClose={onClose}>
    <StyledDashboardModal>
      <StyledHeader>{renderBreed(breed.name)}</StyledHeader>
      <StyledImage src={breed.image} alt={renderBreed(breed.name)} />
      <StyledButton type="button" onClick={onClose}>
        Close
      </StyledButton>
    </StyledDashboardModal>
  </Modal>
);

export default DashboardModal;
