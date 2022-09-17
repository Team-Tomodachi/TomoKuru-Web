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
            <div id="event-container">
                <div id="event-venue-list">
                    <EventVenueList
                        venues={venues}
                        setView={setView}
                        setSelectedEventVenue={setSelectedEventVenue}
                        setEvents={setEvents}
                    />
                </div>
                {selectedEventVenue ? (
                    <div id="event-list">
                        <EventList
                            setView={setView}
                            events={events}
                            setSelectedEvent={setSelectedEvent}
                        />
                    </div>
                ) : null}
                {selectedEvent.id ? (
                    <div id="event-detail">
                        <EventDetail
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