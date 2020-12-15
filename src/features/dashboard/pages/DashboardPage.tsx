import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dashboard } from '../enums/dashboard';
import { Header } from 'common/components';
import { DashboardButton, DashboardModal } from '../components';
import { adaptPath } from '../utils/adapters';
import { modalClose, modalOpen, selectModal } from 'app/App/slice';
import {
  fetchBreedsRequest,
  fetchRandomBreedImageRequest,
  resetBreed,
  resetBreeds,
  resetError,
  selectBreed,
  selectBreeds,
  selectError,
  setBreedName,
} from '../slice';
import { StyledDashboardPage } from './styles';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const modal = useSelector(selectModal);
  const breeds = useSelector(selectBreeds);
  const breed = useSelector(selectBreed);
  const error = useSelector(selectError);

  const handleClose = useCallback(() => {
    dispatch(modalClose());
    dispatch(resetBreed());
    dispatch(resetError());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchBreedsRequest());

    return () => {
      dispatch(resetBreeds());
      dispatch(handleClose());
    };
  }, [dispatch, handleClose]);

  const handleFetchImage = (breed: string) => {
    dispatch(fetchRandomBreedImageRequest(adaptPath(breed)));

    //to simulate error, comment line above and uncomment the one below
    //dispatch(fetchRandomBreedImageRequest(breed));
  };

  const handleOpen = (breed: string) => {
    dispatch(modalOpen(dashboard.open));
    dispatch(setBreedName(breed));
    handleFetchImage(breed);
  };

  const open = modal === dashboard.open;

  return (
    <>
      <Header />
      <StyledDashboardPage>
        {breeds.map((breed: string) => (
          <DashboardButton key={breed} breed={breed} onOpen={handleOpen} />
        ))}
      </StyledDashboardPage>
      {open && (
        <DashboardModal breed={breed} onFetchImage={handleFetchImage} error={error} open={open} onClose={handleClose} />
      )}
    </>
  );
};

export default DashboardPage;
