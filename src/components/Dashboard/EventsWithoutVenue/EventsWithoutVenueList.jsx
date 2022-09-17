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
                                    <img src="https://picsum.photos/200/100" alt="Package Photo"/>
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
