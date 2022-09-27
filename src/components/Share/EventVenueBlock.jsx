import {Image} from "./Image";
import {getEventsByVenueId} from "../../api";

require("./Image.css")
require('./EventVenueBlock.css');

export function EventVenueBlock({venue, setSelectedEventVenue, setEvents}) {
    return (
        <section className="event-venue-block-container">
            {/* container */}
            <div
                key={venue.id}
                onClick={() => {
                    setSelectedEventVenue(venue);
                    getEventsByVenueId(venue.id).then((resp) => {
                        setEvents(resp.data);
                    });
                }}
            >

                {/* image */}
                <div className={'event-venue-block-image'}>
                    <Image reference={venue.photo_url} alt={venue.location_name}/>
                </div>

                {/* content */}
                <div className="event-venue-block-content">
                    {/* name */}
                    <div className="event-venue-block-content-name">{venue.location_name}</div>
                    {/* type */}
                    <div className="event-venue-block-content-type">{venue.venue_type}</div>
                    {/* seats */}
                    {venue.num_seats > 0
                        ? <div className="event-venue-block-content-seats">seats: {venue.num_seats}</div>
                        : null
                    }
                </div>
            </div>
        </section>
    )
}