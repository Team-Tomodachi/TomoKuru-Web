import React, {useEffect, useState} from 'react';
import Sidebar from './Dashboard/Sidebar';
import UserProfile from './Dashboard/UserProfile';
import Venue from './Dashboard/Venue';
import Package from './Dashboard/Package';
import Event from './Dashboard/Event';
import Search from './Dashboard/Search';
import VenueCreation from './Dashboard/Venue/VenueCreation';
import PackageCreation from './Dashboard/Package/PackageCreation';

require('./Dashboard.css');

export default function Dashboard() {
    const [view, setView] = useState('Venue');

    // Venue
    const [venues, setVenues] = useState([]);
    const [selectedVenue, setSelectedVenue] = useState({});

    // Package
    const [packages, setPackages] = useState([]);
    const [selectedPackage, setSelectedPackage] = useState({});

    useEffect(() => {
        console.log("Dashboard userEffect() venues: ", venues);
    }, [venues]);

    useEffect(() => {
        console.log("Dashboard userEffect() selectedVenue: ", selectedVenue);
    }, [selectedVenue]);

    useEffect(() => {
        console.log("Dashboard userEffect() packages: ", packages);
    }, [packages]);

    useEffect(() => {
        console.log("Dashboard userEffect() selectedPackage: ", selectedPackage);
    }, [selectedPackage]);

    return (
        <>
            <div id={'dashboard-container'}>
                <section id={'dashboard-menu'}>
                    <Sidebar
                        setView={setView}
                        setVenues={setVenues}
                        setPackages={setPackages}
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
                        return <section id={'dashboard-content-package'}>
                            <Package
                                setView={setView}
                                setPackages={setPackages}
                                packages={packages}
                                setSelectedPackage={setSelectedPackage}
                                selectedPackage={selectedPackage}
                            />
                        </section>;
                    } else if (view === "PackageCreation") {
                        return <section id={'dashboard-content-package-creation'}>
                            <PackageCreation
                                setView={setView}
                                setPackages={setPackages}
                            />
                        </section>;
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