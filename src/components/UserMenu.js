import { useDispatch } from 'react-redux';
import { Box } from './Box';
import { authOperations } from '../redux/auth';
import { useAuth } from '../hooks/useAuth';

const styles = {
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const logout = async () => {
    dispatch(authOperations.logOut());
  };

  return (
    <Box display="flex" alignItems="center">
      <span style={styles.name}>Добро пожаловать, {user.name}</span>
      <button
        className="button"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Выйти
      </button>
    </Box>
  );
}
