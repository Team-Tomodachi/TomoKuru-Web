import React from 'react';
import './App.css';
import {UserAuth} from './context/AuthContext';
import Header from './components/Header';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
    const {user} = UserAuth();

    return (
        <section className='App'>
            <Header/>
            <section>
                {user === null ? (
                    <Home/>
                ) : (
                    <Dashboard/>
                )}
            </section>
            <Footer/>
        </section>
    );
}

export default App;
