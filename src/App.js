import { useEffect, useState } from 'react';
import { randomUserContext } from './context/randomUserContext';
import Users from './components/Users';
import './App.css';

function App() {
  // State
  const [users, setUsers] = useState([]);

  // Get users from api
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://random-data-api.com/api/users/random_user?size=3');
        const userData = await response.json();
        setUsers(userData);
      }
      catch (error) {
        console.log(error);
      }

    })();
  }, []);

  return (
    <randomUserContext.Provider value={users}>
      <div className="App">
        <Users />
      </div>
    </randomUserContext.Provider>
  );
}

export default App;
