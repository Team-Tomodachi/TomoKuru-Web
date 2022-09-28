import React from 'react';
import EventsWithoutVenueList from "./EventsWithoutVenue/EventsWithoutVenueList";
import EventsWithoutVenueDetail from "./EventsWithoutVenue/EventsWithoutVenueDetail";

require('./EventsWithoutVenue.css');

export default function EventsWithoutVenue({
                                               // setView,
                                               // venues,
                                               eventsWithoutVenue,
                                               selectedEventWithoutVenue,
                                               setSelectedEventWithoutVenue
                                           }) {
    return (
        <>
            <div id="events-without-venue-container">

                <section id="events-without-venue-list-title">
                    Events without venue
                </section>

                <div id="events-without-venue-list">
                    <EventsWithoutVenueList
                        eventsWithoutVenue={eventsWithoutVenue}
                        setSelectedEventWithoutVenue={setSelectedEventWithoutVenue}
                    />
                </div>
                {selectedEventWithoutVenue.id ? (
                    <div id="events-without-venue-detail">
                        <EventsWithoutVenueDetail
                            selectedEventWithoutVenue={selectedEventWithoutVenue}
                        />
                    </div>
                ) : null}

            </div>
        </>
    )
}