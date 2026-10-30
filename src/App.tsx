import React, { useEffect } from 'react';
import { useAppDispatch } from './store/hooks';
import { checkAuth } from './store/userSlice';
import AppRouter from './routes/AppRouter';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, [dispatch]);

  return <AppRouter />;
}

export default App;
