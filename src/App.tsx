import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Context } from './index';
import AppRouter from './routes/AppRouter';

function App() {
  const { store } = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, [store]);

  return <AppRouter />;
}

export default observer(App);
