import React, {useEffect, useState} from "react";
import Signup from './Signup';
import Login from './Login';

require('./Header.css');

export default function Header() {
    const [showSignupModal, setShowSignupModal] = React.useState(false);
    const [showLoginModal, setShowLoginModal] = React.useState(false);
    return (
        <>
            <section id={"container"}>
                <div id={"logo"}>TomoKuru</div>
                <div id={"login"} onClick={() => setShowLoginModal(true)}>
                    Log in
                </div>
                <div id={"signup"} onClick={() => setShowSignupModal(true)}>
                    Sign up
                </div>
            </section>
            <section>
                {showLoginModal ? (
                    <>
                        <Login
                            setShowLoginModal={setShowLoginModal}
                        />
                    </>
                ) : null}
            </section>
            <section>
                {showSignupModal ? (
                    <>
                        <Signup
                            setShowSignupModal={setShowSignupModal}
                        />
                    </>
                ) : null}
            </section>
        </>
    )
}