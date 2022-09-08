import React from 'react';
import './App.css';
import {UserAuth} from "./context/AuthContext";
import Header from "./components/Header";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

function App() {
    const {user} = UserAuth();

    return (
        <div className="App">
            <Header/>
            {user === null ? (
                <Home/>
            ) : (
                <Dashboard/>
            )}
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
