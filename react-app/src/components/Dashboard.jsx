import React, {useEffect, useState} from 'react';
import Sidebar from './Dashboard/Sidebar';
import UserProfile from './Dashboard/UserProfile';
import Venue from './Dashboard/Venue';
import Package from './Dashboard/Package';
import Event from './Dashboard/Event';
import Search from './Dashboard/Search';
import VenueCreation from './Dashboard/Venue/VenueCreation';

require('./Dashboard.css');

export default function Dashboard() {
    const [view, setView] = useState('Venue');

    const [venues, setVenues] = useState([]);
    const [selectedVenue, setSelectedVenue] = useState({});

    const [newVenue, setNewVenue] = useState({});

    useEffect(() => {
        setNewVenue(selectedVenue);
    }, [selectedVenue]);

    return (
        <>
            <div id={'dashboard-container'}>
                <section id={'dashboard-menu'}>
                    <Sidebar
                        setView={setView}
                        setVenues={setVenues}
                    />
                </section>
                {(() => {
                    if (view === "UserProfile") {
                        return <section id={'dashboard-content-user-profile'}><UserProfile/></section>;
                    } else if (view === "Venue") {
                        return <section id={'dashboard-content-venue'}>
                            <Venue
                                setView={setView}
                                setVenues={setVenues}
                                venues={venues}
                                setSelectedVenue={setSelectedVenue}
                                selectedVenue={selectedVenue}
                                setNewVenue={setNewVenue}
                                newVenue={newVenue}
                            />
                        </section>;
                    } else if (view === "VenueCreation") {
                        return <section id={'dashboard-content-venue-creation'}>
                            <VenueCreation
                                setView={setView}
                                setVenues={setVenues}
                            />
                        </section>;
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