
import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';

function App() {

  const [user, setUser] = useState();

  useEffect(() => {
    const url = 'https://randomuser.me/api/';
    axios.get(url)
      .then( res => setUser(res.data.results[0]))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='app'>
      <h1>Asincronismo y apis</h1>
      <UserCard
        user={user}
      />
    </div>
  )
}

export default App;
