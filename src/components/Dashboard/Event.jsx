import React from 'react';
import EventVenueList from "./Event/EventVenueList";
import EventList from "./Event/EventList";
import EventDetail from "./Event/EventDetail";

require('./Event.css');

export default function Event({
                                  setView,
                                  venues,
                                  setSelectedEventVenue,
                                  selectedEventVenue,
                                  setEvents,
                                  events,
                                  setSelectedEvent,
                                  selectedEvent
                              }) {
    return (
        <>
            {/* event container */}
            <div id="event-container">

                {/* event venue list */}
                <div id="event-venue-list">
                    <EventVenueList
                        venues={venues}
                        setSelectedEventVenue={setSelectedEventVenue}
                        setEvents={setEvents}
                    />
                </div>

                {/* event list */}
                {selectedEventVenue.id ? (
                    <div id="event-list">
                        <EventList
                            events={events}
                            setSelectedEvent={setSelectedEvent}
                            setView={setView}
                        />
                    </div>
                ) : null}

                {/* event detail */}
                {selectedEvent.id ? (
                    <div id="event-detail">
                        <EventDetail
                            setSelectedEvent={setSelectedEvent}
                            selectedEvent={selectedEvent}
                            selectedEventVenue={selectedEventVenue}
                            setEvents={setEvents}
                            events={events}
                        />
                    </div>
                ) : null}
            </div>
        </>
    )
}