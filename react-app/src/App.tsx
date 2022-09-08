import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import {AuthContextProvider} from "./context/AuthContext";

function App() {
    return (
        <AuthContextProvider>
            <div className="App">
                <Header/>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </AuthContextProvider>
    );
}

export default App;
