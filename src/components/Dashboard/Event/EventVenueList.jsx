import {getEventsByVenueId} from "../../../api";
import {Image} from "../../Share/Image";

require('./EventVenueList.css');

export default function EventVenueList({
                                           venues,
                                           setView,
                                           setSelectedEventVenue,
                                           setEvents
                                       }) {

    return (
        <>
            <h1>Venue List</h1>
            {
                venues.map((item, index) => {
                    return (
                        <div key={index}>
                            <div
                                className={'event-venue-list-block'}
                                onClick={() => {
                                    setSelectedEventVenue(item);
                                    console.log(" EventVenueList -> onClick -> item: ", item);
                                    console.log(" ##### item.id -> ", item.id);
                                    getEventsByVenueId(item.id).then((resp) => {
                                        console.log(resp.data);
                                        setEvents(resp.data);
                                    });
                                }}
                            >
                                <div
                                    className={'event-venue-list-block-image'}
                                >
                                    <Image reference={item.photo_url} alt={item.location_name} />
                                </div>
                                <div
                                    className={'event-venue-list-block-content'}
                                >
                                    <div className={'event-venue-list-block-content-name'}>{item.location_name}</div>
                                    <div className={'event-venue-list-block-content-type'}>{item.venue_type}</div>
                                    <div
                                        className={'event-venue-list-block-content-seats'}>seats: {item.num_seats}</div>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    )
                })
            }
        </>
    )
}