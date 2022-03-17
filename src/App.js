import { useEffect, useState } from 'react';
import { randomUserContext } from './context/randomUserContext';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import About from './components/About';
import Nav from './components/Nav';
import './App.css';

function App() {
    // State
    const [users, setUsers] = useState([]);

    // Get users from api
    useEffect(() => {
        (async() => {
            try {
                const response = await fetch('https://random-data-api.com/api/users/random_user?size=25');
                // .then(function (res) {
                //   console.log(res.text());
                //   // if(res.ok) {
                //   //   return response.text();
                //   // }
                // });
                const userData = await response.json();
                setUsers(userData);
            } catch (error) {
                console.log(error);
            }

        })();
    }, []);

    return ( <
        randomUserContext.Provider value = { users } >
        <
        Nav / >
        <
        div className = "container" >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        />

        <
        Route path = "/users"
        element = { < Users / > }
        />

        <
        Route path = "/about"
        element = { < About / > }
        />

        <
        /Routes> < /
        div > <
        /randomUserContext.Provider>
    );
}

export default App;