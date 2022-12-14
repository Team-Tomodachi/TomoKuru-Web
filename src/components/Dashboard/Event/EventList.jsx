import {EventBlock} from "../../Share/EventBlock";
import {CreationBlock} from "../../Share/CreationBlock";

require('./EventList.css');

export default function EventList({
                                      events,
                                      setSelectedEvent,
                                      setView
                                  }) {

    return (
        <>
            {/* Event Creation Button */}
            <CreationBlock
                setView={setView}
                view={"EventCreation"}
            />

            {/* Event List */}
            {events.map((item, key) => {
                return (
                    <EventBlock
                        key={key}
                        event={item}
                        setSelectedEvent={setSelectedEvent}
                    />
                )
            })}
        </>
    )
}
