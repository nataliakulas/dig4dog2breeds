import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from 'common/components';
import { renderBreed } from '../utils/presenters';
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

  console.log(breeds.map((breed: string) => renderBreed(breed)));

  return (
    <>
      <Header />
      <StyledDashboardPage>App</StyledDashboardPage>
    </>
  );
};

export default DashboardPage;
