import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      setMessage('✅ Login successful!');
    } else {
      setMessage('❌ Invalid credentials');
    }
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>React Login Page</h2>
      <input
        placeholder="Username"
        onChange={e => setUsername(e.target.value)}
      /><br /><br />
      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      /><br /><br />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
