import { Modal } from 'common/components';
import { renderBreed } from '../../utils/presenters';
import { DashboardModalProps } from './types';
import { StyledButton, StyledDashboardModal, StyledHeader, StyledImage } from './styles';

const DashboardModal = ({ breed, onFetchImage, error, open, onClose }: DashboardModalProps) => (
  <Modal open={open} onClose={onClose}>
    <StyledDashboardModal>
      <StyledHeader>{error ? error : renderBreed(breed.name)}</StyledHeader>
      {!error.length && (
        <>
          <StyledImage src={breed.image} alt={renderBreed(breed.name)} />
          <div>
            <StyledButton type="button" onClick={() => onFetchImage(breed.name)} outlined>
              Another one!
            </StyledButton>
            <StyledButton type="button" onClick={onClose}>
              Close
            </StyledButton>
          </div>
        </>
      )}
    </StyledDashboardModal>
  </Modal>
);

export default DashboardModal;
