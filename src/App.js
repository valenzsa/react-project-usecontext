import { useEffect, useState } from 'react';
import { randomUserContext } from './context/randomUserContext';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Users from './components/Users';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  // State
  const [users, setUsers] = useState([]);

  // Get users from api
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://random-data-api.com/api/users/random_user?size=25');
        const userData = await response.json();
        setUsers(userData);
      } catch (error) {
        console.log(error);
      }

    })();
  }, []);

  return (
    <randomUserContext.Provider value={users}>
      <div className="content">
        <Nav />

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>

      </div>

      <Footer />
    </randomUserContext.Provider>
  );
}

export default App;