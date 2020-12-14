import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Header } from 'common/components';
import { fetchBreedsRequest, resetBreeds } from '../slice';
import { StyledDashboardPage } from './styles';

const DashboardPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBreedsRequest());

    return () => {
      dispatch(resetBreeds());
    };
  }, [dispatch]);

  return (
    <>
      <Header />
      <StyledDashboardPage>App</StyledDashboardPage>
    </>
  );
};

export default DashboardPage;
