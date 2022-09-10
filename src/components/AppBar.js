import AuthNav from './AuthNav';
import { useAuth } from '../hooks/useAuth';
import UserMenu from './UserMenu';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid #fff',
    padding: '20px 0',
  },
};

export default function AppBar() {
  const { isLoggedIn } = useAuth();
  return (
    <header style={styles.header}>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
