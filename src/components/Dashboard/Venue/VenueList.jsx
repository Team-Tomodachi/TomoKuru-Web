import {Image} from "../../Share/Image";

require('./VenueList.css');

export default function VenueList({venues, setSelectedVenue, setView}) {

    return (
        <>
            <h1>Venue List</h1>
            <div>
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => setView("VenueCreation")}
                >
                    Create
                </button>
            </div>
            {
                venues.map((item, index) => {
                    return (
                        <div key={index}>
                            <div
                                className={'venue-list-block'}
                                onClick={() => {
                                    setSelectedVenue(item);
                                    console.log(" VenueList -> onClick -> item: ", item);
                                }}
                            >
                                <div
                                    className={'venue-list-block-image'}
                                >
                                    {/*<img src="https://picsum.photos/200/100" alt="Venue Photo"/>*/}
                                    <Image reference={item.photo_url} alt={item.location_name} />
                                </div>
                                <div
                                    className={'venue-list-block-content'}
                                >
                                    <div className={'venue-list-block-content-name'}>{item.location_name}</div>
                                    <div className={'venue-list-block-content-type'}>{item.venue_type}</div>
                                    <div className={'venue-list-block-content-seats'}>seats: {item.num_seats}</div>
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