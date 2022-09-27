import React from 'react';
import './App.css';
import {UserAuth} from './context/AuthContext';
import Header from './components/Header';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import {Toaster} from "react-hot-toast";

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
                <Toaster
                    toastOptions={{
                        style: {
                            border: '1px solid #FFD15C',
                            padding: '10px',
                            maxWidth: '600px',
                            color: '#000000',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            background: '#FFD15C',
                            transition: 'all 2s ease-out'
                        },
                    }}
                />
            </section>
            <Footer/>
        </section>
    );
}

export default App;
