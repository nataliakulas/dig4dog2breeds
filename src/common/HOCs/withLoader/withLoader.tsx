import React, { FunctionComponent } from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import { Loader } from '../../components';

const withLoader = (Component: FunctionComponent<any>) => (props: any) => {
  const { promiseInProgress } = usePromiseTracker({ delay: 1000 });

  return (
    <>
      <Loader visible={promiseInProgress} />
      <Component {...props} />
    </>
  );
};

export default withLoader;
