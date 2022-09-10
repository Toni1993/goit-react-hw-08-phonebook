import ContactsPage from 'pages/ContactsPage';
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Layout from './Layout';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import { useAuth } from '../hooks/useAuth';

const styles = {
  wrapper: {
    maxWidth: '800px',
    margin: '0 auto',
  },
};

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h1>Refreshing user...</h1>
  ) : (
    <div style={styles.wrapper}>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={<PrivateRoute component={<ContactsPage />} />}
            />

            <Route
              path="login"
              element={
                <PublicRoute
                  restricted
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            ></Route>

            <Route
              path="register"
              element={
                <PublicRoute
                  restricted
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            ></Route>

            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
