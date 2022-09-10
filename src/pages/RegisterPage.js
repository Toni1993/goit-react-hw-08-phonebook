import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

const styles = {
  formWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  form: {
    width: 320,
  },
  label: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: 15,
  },
  message: {
    color: 'red',
    fontSize: '20px',
  },
};

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const nameValid = !!name.trim().length;
  const passwordValid = !!password.trim().length;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const emailValid = !!email.trim().length && emailRegex.test(email);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!nameValid || !passwordValid || !emailValid) {
      setMessage('Все фигня, давай по новой.');
      return;
    }
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
    setMessage('');
  };

  return (
    <div style={styles.formWrapper}>
      <h1>Страница регистрации</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          <div>Имя</div>
          <input
            className="input"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          <div>Почта</div>
          <input
            className="input"
            type="email"
            name="email"
            required
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          <div>Пароль</div>
          <input
            className="input"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className="button" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <div style={styles.message}>{message}</div>
    </div>
  );
}
