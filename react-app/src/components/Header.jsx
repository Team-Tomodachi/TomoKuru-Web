import React, {useEffect, useState} from "react";

require('./Header.css');

export default function Header()
{
    return (
        <section id={"container"}>
            <div id={"logo"}>TomoKuru</div>
            <div id={"login"}>Log in</div>
            <div id={"signup"}>Sign up</div>
        </section>
    )
}