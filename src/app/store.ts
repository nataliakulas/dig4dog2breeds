import { configureStore } from '@reduxjs/toolkit';
import appReducer from 'app/App/slice';
import dashboardReducer from 'features/dashboard/slice';

const store = configureStore({
  reducer: {
    app: appReducer,
    dashboard: dashboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
