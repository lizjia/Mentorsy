import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes, Link, Outlet} from "react-router-dom";


const projectID = "e279180e-8cd6-444f-98a8-ba949e930296";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

  //   try {
  //     await axios.get('https://api.chatengine.io/chats', { headers: authObject });

  //     localStorage.setItem('username', username);
  //     localStorage.setItem('password', password);

  //     window.location.reload();
  //     setError('');
  //   } catch (error) {
  //     setError('Incorrect   Credentials! :(');
  //   }
  // };
  const [user, setUser] = useState();

  var apiEndpoint = "";
  apiEndpoint = "http://localhost:5000/user";

  function getUsers(){
      axios
          .get(apiEndpoint
          ).then((response)=>{setUser(response.data);
              console.log(response);
          }).catch((err) => {
          console.log(err);
        });
    
        console.log(document.getElementById("password").value)
        console.log(user[5].email)
        
    for(let i = 0; i<user.length; i++){
      if(user[i].email == document.getElementById("email").value && user[i].password == document.getElementById("password").value){
        window.location.href= '/profile';
        sessionStorage.setItem('biography', user[i].biography);
        sessionStorage.setItem('name', user[i].person_name);
        sessionStorage.setItem('hometown', user[i].hometown);
        sessionStorage.setItem('role', user[i].role);
        sessionStorage.setItem('title', user[i].title);
        sessionStorage.setItem('industry', user[i].industry);
        sessionStorage.setItem('school', user[i].school);
        sessionStorage.setItem('education', user[i].education);


        // <Link
        //   to={{
        //     pathname: "/profile",
        //     state: user[i] // your data array of objects
        //   }}
        // ></Link>
      }
    }

  }
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
          <input id = "email" type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          </div>
          <div className='form-control'>
          <input id = "password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          </div>
          </center>
          <div align="center">
            <button type="submit" className="button" onClick = { event => getUsers()}>
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