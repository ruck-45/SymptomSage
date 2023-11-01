import {useState} from 'react';
import './App.css';
import Landing from './components/landingPage/Landing';

function App() {

  const [loginStatus, loginStatusChanger] = useState("false");

  return (
    <Landing />
  );
}

export default App;
