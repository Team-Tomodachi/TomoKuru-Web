import React, { useEffect, useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

import { UserAuth } from "../context/AuthContext";

require("./Header.css");

export default function Header() {
  const { user, createUser, logout } = UserAuth();

  const [showSignupModal, setShowSignupModal] = React.useState(false);
  const [showLoginModal, setShowLoginModal] = React.useState(false);
  return (
    <>
      <section id={"header-container"}>
        <div id={"header-logo"} onClick={() => console.log("user: ", user)}>
          TomoKuru <span className="text-yellow-600">Vendor Portal</span>
        </div>

        {user === null ? (
          <>
            <div id={"header-login"} onClick={() => setShowLoginModal(true)}>
              Log in
            </div>
            <div id={"header-signup"} onClick={() => setShowSignupModal(true)}>
              Sign up
            </div>
          </>
        ) : (
          <>
            <div id={"header-logout"} onClick={() => logout()}>
              Logout
            </div>
          </>
        )}
      </section>
      <section>
        {showLoginModal ? (
          <>
            <Login setShowLoginModal={setShowLoginModal} />
          </>
        ) : null}
      </section>
      <section>
        {showSignupModal ? (
          <>
            <Signup setShowSignupModal={setShowSignupModal} />
          </>
        ) : null}
      </section>
    </>
  );
}
