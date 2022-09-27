import {Image} from "./Image";
import {getPackagesByVenueId} from "../../api"

require("./Image.css")
require('./PackageVenueBlock.css');

export function PackageVenueBlock({venue, setSelectedPackageVenue, setPackages}) {
    return (
        <section className="package-venue-block-container">
            {/* container */}
            <div
                key={venue.id}
                onClick={() => {
                    setSelectedPackageVenue(venue);
                    getPackagesByVenueId(venue.id).then((resp) => {
                        setPackages(resp.data);
                    });
                }}
            >

                {/* image */}
                <div className={'package-venue-block-image'}>
                    <Image reference={venue.photo_url} alt={venue.location_name}/>
                </div>

                {/* content */}
                <div className="package-venue-block-content">
                    {/* name */}
                    <div className="package-venue-block-content-name">{venue.location_name}</div>
                    {/* type */}
                    <div className="package-venue-block-content-type">{venue.venue_type}</div>
                    {/* seats */}
                    {venue.num_seats > 0
                        ? <div className="package-venue-block-content-seats">seats: {venue.num_seats}</div>
                        : null
                    }
                </div>

            </div>
        </section>
    )
}