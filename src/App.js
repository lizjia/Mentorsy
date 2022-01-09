import { ChatEngine } from 'react-chat-engine';

import './App.css';

import LoginForm from './components/LoginForm';

import ChatFeed from './components/ChatFeed';

const App = () => {
  //if there is no username/not logged in
  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
        height = "100vh"
        projectID= "e279180e-8cd6-444f-98a8-ba949e930296"
        userName= {localStorage.getItem('username')}
        userSecret= {localStorage.getItem('password')}
        renderChatFeed = {(chatAppProps)=> <ChatFeed {... chatAppProps}/>}
        onNewMessage={() => new Audio('https://chat-engine-asset.s3.amazonaw.com/click.mp3').play()}
    />
  )
}

export default App;