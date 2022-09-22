import {Image} from "../../Share/Image";

require('./EventsWithoutVenueList.css');

export default function EventsWithoutVenueList({
                                                   eventsWithoutVenue,
                                                   setSelectedEventWithoutVenue
                                               }) {

    return (
        <>
            <h1>EventsWithoutVenueList</h1>
            {
                eventsWithoutVenue.map((item, index) => {
                    return (
                        <div key={index}>
                            <div
                                className={'event-list-block'}
                                onClick={() => {
                                    console.log(" setSelectedEventWithoutVenue(): -> ", item);
                                    setSelectedEventWithoutVenue(item);
                                }}
                            >
                                <div
                                    className={'event-list-block-image'}
                                >
                                    <Image reference={item.photo_url} alt={item.name}/>
                                </div>
                                <div
                                    className={'event-list-block-content'}
                                >
                                    <div className={'event-list-block-content-name'}>{item.name}</div>
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
