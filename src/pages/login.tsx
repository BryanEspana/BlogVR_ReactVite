import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    if(username === 'bryanespana' && password === '12345'){
      window.location.href = '/home';
    }
    // Aquí iría la lógica para manejar el inicio de sesión
    console.log('Usuario:', username, 'Contraseña:', password);
  };

  const GoBack = (event) => {
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
        <button className='button' onClick={GoBack} style={{width:'100%'}}>
          Regresar
        </button>
        <button type="submit" className='button' style={{width:'100%'}}>
          Iniciar Sesión
        </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
