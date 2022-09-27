import {Image} from "./Image";

require("./Image.css")
require('./VenueBlock.css');

export function VenueBlock({venue, setSelectedVenue}) {
    return (
        <section className="venue-block-container">
            {/* container */}
            <div
                key={venue.id}
                onClick={() => {
                    setSelectedVenue(venue);
                }}
            >

                {/* image */}
                <div className={'venue-block-image'}>
                    <Image reference={venue.photo_url} alt={venue.location_name}/>
                </div>

                {/* content */}
                <div className="venue-block-content">
                    {/* name */}
                    <div className="venue-block-content-name">{venue.location_name}</div>
                    {/* type */}
                    <div className="venue-block-content-type">{venue.venue_type}</div>
                    {/* seats */}
                    {venue.num_seats > 0
                        ? <div className="venue-block-content-seats">seats: {venue.num_seats}</div>
                        : null
                    }
                </div>

            </div>
        </section>
    )
}