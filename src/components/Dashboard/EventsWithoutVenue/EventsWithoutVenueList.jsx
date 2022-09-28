import {Image} from "../../Share/Image";
import {EventBlock} from "../../Share/EventBlock";

require('./EventsWithoutVenueList.css');

export default function EventsWithoutVenueList({
                                                   eventsWithoutVenue,
                                                   setSelectedEventWithoutVenue
                                               }) {

    return (
        <>
            {
                eventsWithoutVenue.map((item) => {
                    return (
                        <EventBlock
                            event={item}
                            setSelectedEvent={setSelectedEventWithoutVenue}
                        />
                    )
                })
            }
        </>
    )
}
