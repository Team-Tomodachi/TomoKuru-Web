import React, {useEffect, useState} from 'react';
import Sidebar from './Dashboard/Sidebar';
import Profile from "./Dashboard/Profile";
import Content from "./Dashboard/Content";
import Venue from "./Dashboard/Venue";

require('./Dashboard.css');

export default function Dashboard() {
    const [view, setView] = useState("Profile");
    return (
        <>
            <div id={'container'}>
                <section id={'menu'} onClick={() => {
                    view === "Profile" ? setView("Venue") : setView("Profile")
                }}>
                    <Sidebar/>
                </section>
                {view === "Profile" ?
                    <section id={'profile'}>
                        <Profile/>
                    </section>
                    :
                    <section id={'venue'}>
                        <Venue/>
                    </section>
                }
            </div>
        </>
    )
}