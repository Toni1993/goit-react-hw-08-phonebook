import { useDispatch } from 'react-redux';
import { Box } from './Box';
import { authOperations } from '../redux/auth';
import { useAuth } from '../hooks/useAuth';

const styles = {
  name: {
    fontWeight: 700,
    marginRight: 12,
    color: '#2980b9',
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const logout = async () => {
    dispatch(authOperations.logOut());
  };

  return (
    <>
      <span>
        Welcome <span style={styles.name}>{user.name}</span>
      </span>
      <button
        className="button"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </button>
    </>
  );
}
