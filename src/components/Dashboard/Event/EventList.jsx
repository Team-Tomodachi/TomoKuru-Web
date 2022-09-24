import {EventBlock} from "../../Share/EventBlock";

require('./EventList.css');

export default function EventList({
                                      events,
                                      setSelectedEvent
                                  }) {

    return (
        <>
            {events.map((item) => {
                return (
                    <EventBlock
                        event={item}
                        setSelectedEvent={setSelectedEvent}
                    />
                )
            })}
        </>
    )
}
