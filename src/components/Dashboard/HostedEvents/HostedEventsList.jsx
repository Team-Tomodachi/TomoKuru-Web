import React from 'react';
import {EventBlock} from "../../Share/EventBlock";

require('./HostedEventsList.css');

export default function HostedEventsList({hostedEvents, setSelectedHostedEvent}) {
    return (
        <>
            {
                hostedEvents.map((item) => {
                    return (
                        <EventBlock
                            event={item}
                            setSelectedEvent={setSelectedHostedEvent}
                        />
                    )
                })
            }
        </>
    )
}