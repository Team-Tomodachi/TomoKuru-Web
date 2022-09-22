import React, {useEffect, useState} from 'react';
import Sidebar from './Dashboard/Sidebar';
import UserProfile from './Dashboard/UserProfile';
import Venue from './Dashboard/Venue';
import Package from './Dashboard/Package';
import Event from './Dashboard/Event';
import VenueCreation from './Dashboard/Venue/VenueCreation';
import PackageCreation from './Dashboard/Package/PackageCreation';
import EventCreation from "./Dashboard/Event/EventCreation";
import EventsWithoutVenue from "./Dashboard/EventsWithoutVenue";
import UpcomingEvents from "./Dashboard/UpcomingEvents";
import HostedEvents from "./Dashboard/HostedEvents";
import {getFileUrl} from "../utilities/firebase-storage";

require('./Dashboard.css');

export default function Dashboard() {
    const [view, setView] = useState('Venue');

    // Venue
    const [venues, setVenues] = useState([]);
    const [selectedVenue, setSelectedVenue] = useState({});

    // Package
    const [selectedPackageVenue, setSelectedPackageVenue] = useState({});
    const [packages, setPackages] = useState([]);
    const [selectedPackage, setSelectedPackage] = useState({});

    // Event
    const [selectedEventVenue, setSelectedEventVenue] = useState({});
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState({});

    // Events without venue
    const [eventsWithoutVenue, setEventsWithoutVenue] = useState([]);
    const [selectedEventWithoutVenue, setSelectedEventWithoutVenue] = useState({});

    // Upcoming Events
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [selectedUpcomingEvent, setSelectedUpcomingEvent] = useState({});

    // Hosted Events
    const [hostedEvents, setHostedEvents] = useState([]);
    const [selectedHostedEvent, setSelectedHostedEvent] = useState({});

    // Venue
    useEffect(() => {
        console.log("Dashboard.userEffect(venues, [venues]): ", venues);
    }, [venues]);

    useEffect(() => {
        console.log("Dashboard.userEffect(selectedVenue, [selectedVenue]): ", selectedVenue);
    }, [selectedVenue]);

    // Package
    useEffect(() => {
        console.log("Dashboard.userEffect(selectedPackageVenue, [selectedPackageVenue]): ", selectedPackageVenue);
        setSelectedPackage({});
    }, [selectedPackageVenue]);

    useEffect(() => {
        console.log("Dashboard.userEffect(packages, [packages]): ", packages);
    }, [packages]);

    useEffect(() => {
        console.log("Dashboard.userEffect(selectedPackage, [selectedPackage]): ", selectedPackage);
    }, [selectedPackage]);

    // Event
    useEffect(() => {
        console.log("Dashboard.userEffect(selectedEventVenue, [selectedEventVenue]): ", selectedEventVenue);
        setSelectedEvent({});
    }, [selectedEventVenue]);

    useEffect(() => {
        console.log("Dashboard.userEffect(events, [events]): ", events);
    }, [events]);

    useEffect(() => {
        console.log("Dashboard.userEffect(selectedEvent, [selectedEvent]): ", selectedEvent);
    }, [selectedEvent]);

    // Events without venue
    useEffect(() => {
        console.log("Dashboard.userEffect(eventsWithoutVenue, [eventsWithoutVenue]): ", eventsWithoutVenue);
    }, [eventsWithoutVenue]);

    useEffect(() => {
        console.log("Dashboard.userEffect(selectedEventWithoutVenue, [selectedEventWithoutVenue]): ", selectedEventWithoutVenue);
    }, [selectedEventWithoutVenue]);

    // Upcoming Events
    useEffect(() => {
        console.log("Dashboard.userEffect(upcomingEvents, [upcomingEvents]): ", upcomingEvents);
    }, [upcomingEvents]);

    useEffect(() => {
        console.log("Dashboard.userEffect(selectedUpcomingEvent, [selectedUpcomingEvent]): ", selectedUpcomingEvent);
    }, [selectedUpcomingEvent]);

    // Hosted Events
    useEffect(() => {
        console.log("Dashboard.userEffect(hostedEvents, [hostedEvents]): ", hostedEvents);
    }, [hostedEvents]);

    useEffect(() => {
        console.log("Dashboard.userEffect(selectedHostedEvent, [selectedHostedEvent]): ", selectedHostedEvent);
    }, [selectedHostedEvent]);

    return (
        <>
            <div id={'dashboard-container'}>
                <section id={'dashboard-menu'}>
                    <Sidebar
                        setView={setView}
                        setVenues={setVenues}
                        setEventsWithoutVenue={setEventsWithoutVenue}
                        setUpcomingEvents={setUpcomingEvents}
                        setHostedEvents={setHostedEvents}
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
                        return <section>
                            <VenueCreation
                                setView={setView}
                                setVenues={setVenues}
                            />
                        </section>;
                    } else if (view === "Package") {
                        return <section>
                            <Package
                                setView={setView}
                                venues={venues}
                                setSelectedPackageVenue={setSelectedPackageVenue}
                                selectedPackageVenue={selectedPackageVenue}
                                setPackages={setPackages}
                                packages={packages}
                                setSelectedPackage={setSelectedPackage}
                                selectedPackage={selectedPackage}
                            />
                        </section>;
                    } else if (view === "PackageCreation") {
                        return <section>
                            <PackageCreation
                                setView={setView}
                                setPackages={setPackages}
                                selectedPackageVenue={selectedPackageVenue}
                            />
                        </section>;
                    } else if (view === "Event") {
                        return <section>
                            <Event
                                setView={setView}
                                venues={venues}
                                setSelectedEventVenue={setSelectedEventVenue}
                                selectedEventVenue={selectedEventVenue}
                                setEvents={setEvents}
                                events={events}
                                setSelectedEvent={setSelectedEvent}
                                selectedEvent={selectedEvent}
                            />
                        </section>;
                    } else if (view === "EventCreation") {
                        return <section>
                            <EventCreation
                                setView={setView}
                                setEvents={setEvents}
                                selectedEventVenue={selectedEventVenue}
                            />
                        </section>;
                    } else if (view === "EventsWithoutVenue") {
                        return <section>
                            <EventsWithoutVenue
                                setView={setView}
                                eventsWithoutVenue={eventsWithoutVenue}
                                setSelectedEventWithoutVenue={setSelectedEventWithoutVenue}
                                selectedEventWithoutVenue={selectedEventWithoutVenue}
                            />
                        </section>;
                    } else if (view === "UpcomingEvents") {
                        return <section>
                            <UpcomingEvents
                                upcomingEvents={upcomingEvents}
                                selectedUpcomingEvent={selectedUpcomingEvent}
                                setSelectedUpcomingEvent={setSelectedUpcomingEvent}
                            />
                        </section>;
                    } else if (view === "HostedEvents") {
                        return <section>
                            <HostedEvents
                                hostedEvents={hostedEvents}
                                selectedHostedEvent={selectedHostedEvent}
                                setSelectedHostedEvent={setSelectedHostedEvent}
                            />
                        </section>;
                    // } else if (view === "Search") {
                    //     return <section id={'dashboard-content-search'}><Search/></section>;
                    } else {
                        return null;
                    }
                })()}
            </div>
        </>
    )
}