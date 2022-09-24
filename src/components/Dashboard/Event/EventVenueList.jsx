import {EventVenueBlock} from "../../Share/EventVenueBlock";

require('./EventVenueList.css');

export default function EventVenueList({
                                           venues,
                                           setSelectedEventVenue,
                                           setEvents
                                       }) {

    return (
        <>
            {venues.map((item) => {
                return (
                    <EventVenueBlock
                        venue={item}
                        setSelectedEventVenue={setSelectedEventVenue}
                        setEvents={setEvents}
                    />
                )
            })}
        </>
    )
}