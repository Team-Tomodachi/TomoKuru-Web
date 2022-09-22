import React, { useEffect, useState } from "react";

require("./Home.css");

export default function Home() {
  return (
    <>
      <h1 className="welcomeTitle">TomoKuru</h1>
      <span className="portal" id="portal">
        Vendor Portal
      </span>
      <br />
      <br />
      <p>Welcome to the vendor portal for the Tomokuru App.</p>
      <br />
      <br />
    </>
  );
}
