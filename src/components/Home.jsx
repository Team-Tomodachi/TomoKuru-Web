import React, { useEffect, useState } from "react";

require("./Home.css");

export default function Home() {
  return (
    <>
      <div id="bg-image">
        <div className="flex flex-col justify-start content-center h-4/5">
          <h1
            className="text-9xl text-white my-6 drop-shadow-2xl"
            id="product_name"
          >
            TomoKuru
          </h1>
          <span
            className="text-white text-6xl my-6 font-bold drop-shadow-2xl"
            id="portal"
          >
            Vendor Portal
          </span>
        </div>
        <br />
        <br />
        {/* <p className="p-8">Welcome to the vendor portal for Tomokuru.</p> */}
        <br />
        <br />
      </div>
    </>
  );
}
