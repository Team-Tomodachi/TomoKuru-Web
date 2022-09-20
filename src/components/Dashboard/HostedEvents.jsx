import React from 'react';
import HostedEventsList from "./HostedEvents/HostedEventsList";
import HostedEventsDetail from "./HostedEvents/HostedEventsDetail";

require('./HostedEvents.css');

export default function HostedEvents({
                                           hostedEvents,
                                           selectedHostedEvent,
                                           setSelectedHostedEvent
                                       }) {
    return (
        <>
            <div id="hosted-events-container">
                <div id="hosted-events-list">
                    <HostedEventsList
                        hostedEvents={hostedEvents}
                        setSelectedHostedEvent={setSelectedHostedEvent}
                    />
                </div>
                {hostedEvents.length > 0 && selectedHostedEvent.id ?(
                    <div id="hosted-events-detail">
                        <HostedEventsDetail
                            selectedHostedEvent={selectedHostedEvent}
                        />
                    </div>
                ) : null}

            </div>
        </>
    )
}