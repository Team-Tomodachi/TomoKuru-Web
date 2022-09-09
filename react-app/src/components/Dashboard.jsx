import React, {useEffect, useState} from 'react';
import Sidebar from './Dashboard/Sidebar';
import UserProfile from './Dashboard/UserProfile';
import Venue from './Dashboard/Venue';
import Package from './Dashboard/Package';
import Event from './Dashboard/Event';
import Search from './Dashboard/Search';

require('./Dashboard.css');

export default function Dashboard() {
    const [view, setView] = useState('Venue');

    return (
        <>
            <div id={'dashboard-container'}>
                <section id={'dashboard-menu'}>
                    <Sidebar setView={setView}/>
                </section>
                {(() => {
                    if (view === "UserProfile") {
                        return <section id={'dashboard-content-user-profile'}><UserProfile/></section>;
                    } else if (view === "Venue") {
                        return <section id={'dashboard-content-venue'}><Venue/></section>;
                    } else if (view === "Package") {
                        return <section id={'dashboard-content-package'}><Package/></section>;
                    } else if (view === "Event") {
                        return <section id={'dashboard-content-event'}><Event/></section>;
                    } else if (view === "Search") {
                        return <section id={'dashboard-content-search'}><Search/></section>;
                    } else {
                        return null;
                    }
                })()}
            </div>
        </>
    )
}