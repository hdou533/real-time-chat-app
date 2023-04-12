
import { useState, useRef } from 'react';
import './App.css';
import { Auth } from './components/Auth';
import Cookies from 'universal-cookie/cjs/Cookies';
import { Chat } from './components/Chat';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';

const cookies = new Cookies()

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'))
  const [room, setRoom] = useState(null)

  const roomInputRef = useRef(null)

  const signUserOut = async () => {
    await signOut(auth)
    cookies.remove("auth-token")
    setIsAuth(false)
    setRoom(null)
  }

  if (!isAuth) {
    <div className="App">
      <Auth />
    </div>
  }
  return ( 
    <div className="App">
      {room ? (
        <Chat room={room} />
      ) : (
          <div>
            <label>Enter Room name:</label>
            <input ref={roomInputRef} />
            <button onClick={() => (setRoom(roomInputRef.current.value))}>Enter Chat</button>
        </div>
      )
      }
      <div>
        <button onClick={signUserOut}>Sign Out</button>
      </div>
    </div>
  );
}

export default App;
