import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dashboard } from '../enums/dashboard';
import { Header } from 'common/components';
import { DashboardButton, DashboardModal } from '../components';
import { modalClose, modalOpen, selectModal } from 'app/App/slice';
import { fetchBreedsRequest, resetBreeds, selectBreeds } from '../slice';
import { StyledDashboardPage } from './styles';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const modal = useSelector(selectModal);
  const breeds = useSelector(selectBreeds);

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
    console.log(breed);
  };

  return (
    <>
      <Header />
      <StyledDashboardPage>
        {breeds.map((breed: string) => (
          <DashboardButton key={breed} breed={breed} onOpen={handleOpen} />
        ))}
      </StyledDashboardPage>
      <DashboardModal open={modal === dashboard.open} onClose={handleClose} />
    </>
  );
};

export default DashboardPage;
