import React from 'react';
import UpcomingEventsList from "./UpcomingEvents/UpcomingEventsList";
import UpcomingEventsDetail from "./UpcomingEvents/UpcomingEventsDetail";

require('./UpcomingEvents.css');

export default function UpcomingEvents({
                                           upcomingEvents,
                                           selectedUpcomingEvent,
                                           setSelectedUpcomingEvent
                                       }) {
    return (
        <>
            <div id="upcoming-events-container">

                <section id="upcoming-events-list-title">
                    Upcoming events
                </section>

                <div id="upcoming-events-list">
                    <UpcomingEventsList
                        upcomingEvents={upcomingEvents}
                        setSelectedUpcomingEvent={setSelectedUpcomingEvent}
                    />
                </div>
                {upcomingEvents.length > 0 && selectedUpcomingEvent.id ?(
                    <div id="upcoming-events-detail">
                        <UpcomingEventsDetail
                            selectedUpcomingEvent={selectedUpcomingEvent}
                        />
                    </div>
                ) : null}

            </div>
        </>
    )
}