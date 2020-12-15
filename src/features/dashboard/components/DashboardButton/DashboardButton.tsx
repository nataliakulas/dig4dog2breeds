import { StyledDashboardButton } from './styles';
import { renderBreed } from '../../utils/presenters';

const DashboardButton = ({ breed, onOpen }: { breed: string; onOpen: (breed: string) => void }) => (
  <StyledDashboardButton type="button" onClick={() => onOpen(breed)}>
    {renderBreed(breed)}
  </StyledDashboardButton>
);

export default DashboardButton;
