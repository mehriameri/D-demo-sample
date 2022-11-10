import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import Store from './redux/store/Store';
import Spinner from './components/shared/UI/Spinner/Spinner';
import ProfilePage from './components/profilePage/sidebar';

let persistor = persistStore(Store);
const HomePage = lazy(() => import('./components/homePage'));
const Login = lazy(() => import('./components/loginPage/Login'));
const CheckoutPage = lazy(() => import('./components/checkoutPage/index'));
const ProductPage = lazy(() => import('./components/productsPage'));
function App() {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path="/" element={<Suspense><HomePage /></Suspense>} />
          <Route path='login' element={<Suspense><Login /></Suspense>} />
          <Route path='/product' element={<Suspense fallback={<Spinner />}><ProductPage /></Suspense>} />
          <Route path='/product/:id' element={<Suspense fallback={<Spinner />}><ProductPage /></Suspense>} />
          <Route path='/checkout' element={<Suspense><CheckoutPage /></Suspense>} />
          <Route path='/profile/:profileDetail' element={<Suspense><ProfilePage /></Suspense>} />
          <Route path='/profile' element={<Suspense><ProfilePage /></Suspense>} />
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;
