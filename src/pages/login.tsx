import React, { useState } from 'react';
import SimpleAlert from '../components/alertDialog';

function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertText, setAlertText] = useState<string>('');
  const [alertSeverity, setAlertSeverity] = useState<"error" | "info" | "success" | "warning" | undefined>(undefined);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const usernameInput = event.currentTarget.username.value;
    const passwordInput = event.currentTarget.password.value;

    if (usernameInput === 'admin' && passwordInput === '12345') {
      window.location.href = '/';
      localStorage.setItem('user', usernameInput);
      localStorage.setItem('isActive', 'true');
    } else {
      setAlertText('Usuario o contraseña incorrectos');
      setAlertSeverity('error');
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      console.log('Usuario y contraseña incorrectos');
    }
  };

  const goBack = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    window.location.href = '/';
  }

  return (
    <div className='divCenter'>
      <form onSubmit={handleSubmit} className='form'>
        <h2 style={{ textAlign: 'center' }}>Iniciar Sesión</h2>
        <label htmlFor="username" style={{ marginBottom: '10px' }}>
          Nombre de usuario:
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '90%', padding: '10px', marginTop: '8px' }}
          />
        </label>
        <label htmlFor="password" style={{ marginBottom: '10px' }}>
          Contraseña:
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '90%', padding: '10px', marginTop: '8px' }}
          />
        </label>
        <div className='displayrow'>
          <button className='button' onClick={goBack} style={{width:'100%'}}>
            Regresar
          </button>
          <button type="submit" className='button' style={{width:'100%'}}>
            Iniciar Sesión
          </button>
        </div>
        {showAlert && <SimpleAlert text={alertText} severity={alertSeverity} />}

      </form>
    </div>
  );
}

export default Login;
