import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from 'common/components';
import { DashboardButton } from '../components';
import { fetchBreedsRequest, resetBreeds, selectBreeds } from '../slice';
import { StyledDashboardPage } from './styles';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const breeds = useSelector(selectBreeds);

  useEffect(() => {
    dispatch(fetchBreedsRequest());

    return () => {
      dispatch(resetBreeds());
    };
  }, [dispatch]);

  const handleOpen = (breed: string) => console.log(breed);

  return (
    <>
      <Header />
      <StyledDashboardPage>
        {breeds.map((breed: string) => (
          <DashboardButton key={breed} breed={breed} onOpen={handleOpen} />
        ))}
      </StyledDashboardPage>
    </>
  );
};

export default DashboardPage;
