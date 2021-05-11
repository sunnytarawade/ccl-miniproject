import logo from './logo.svg';
import './App.css';
import MainMap from './pages/MainMap';
import Auth from './pages/Auth';
import {useState} from 'react'
function App() {

  const [appState, setAppState] = useState({
    shouldLogin : false
  })

  return appState.shouldLogin ? <MainMap appState={appState} setAppState={setAppState} /> : <Auth appState={appState} setAppState={setAppState}/>
}

export default App;
