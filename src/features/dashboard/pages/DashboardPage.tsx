import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dashboard } from '../enums/dashboard';
import { Header } from 'common/components';
import { DashboardButton, DashboardModal } from '../components';
import { modalClose, modalOpen, selectModal } from 'app/App/slice';
import { fetchBreedsRequest, fetchRandomBreedImageRequest, resetBreeds, selectBreeds } from '../slice';
import { StyledDashboardPage } from './styles';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const modal = useSelector(selectModal);
  const breeds = useSelector(selectBreeds);

  const [breed, setBreed] = useState('');

  const handleClose = useCallback(() => dispatch(modalClose()), [dispatch]);

  useEffect(() => {
    dispatch(fetchBreedsRequest());

    return () => {
      dispatch(resetBreeds());
      dispatch(handleClose());
    };
  }, [dispatch, handleClose]);

  const handleOpen = (breed: string) => {
    dispatch(modalOpen(dashboard.open));
    setBreed(breed);
    // @ts-ignore
    dispatch(fetchRandomBreedImageRequest(breed + '/images/random'));
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
      {open && <DashboardModal breed={breed} open={open} onClose={handleClose} />}
    </>
  );
};

export default DashboardPage;
