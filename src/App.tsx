import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Context } from './index';
import AppRouter from './routes/AppRouter';

function App() {
  const { userStore } = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      userStore.checkAuth();
    }
  }, [userStore]);

  return <AppRouter />;
}

export default observer(App);
