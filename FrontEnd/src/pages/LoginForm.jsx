import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const projectID = "e279180e-8cd6-444f-98a8-ba949e930296";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (error) {
      setError('Incorrect   Credentials! :(');
    }
  };

  return (
    <div className="wrapper">
      <div className="orm">
        <h1 className="title">Mentorsy</h1>
        {/* <form onSubmit={handleSubmit}> */}
        <center>
        <div class="col-6">
        <div className="container">
        <center>
          {/* <form className = 'add-form'> */}
          <div className='form-control'>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          </div>
          <div className='form-control'>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          </div>
          </center>
          <div align="center">
            <button type="submit" className="button" onClick = { event => window.location.href = '/profile'}>
              Login
            </button>
          </div>
          </div>
          </div>
          </center>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default LoginForm;