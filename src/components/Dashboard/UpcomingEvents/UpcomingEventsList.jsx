import {EventBlock} from "../../Share/EventBlock";

require('./UpcomingEventsList.css');

export default function UpcomingEventsList({
                                               upcomingEvents,
                                               setSelectedUpcomingEvent
                                           }) {
    return (
        <>
            {upcomingEvents.map((item) => {
                return (
                    <EventBlock
                        event={item}
                        setSelectedEvent={setSelectedUpcomingEvent}
                    />
                )
            })}
        </>
    )
}