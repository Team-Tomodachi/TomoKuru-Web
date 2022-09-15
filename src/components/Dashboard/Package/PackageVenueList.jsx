import {getPackagesByVenueId} from "../../../api";

require('./PackageVenueList.css');

export default function PackageVenueList({
                                             venues,
                                             setSelectedPackageVenue,
                                             setPackages
                                         }) {

    return (
        <>
            <h1>Package Venue List</h1>
            {
                venues.map((item, index) => {
                    return (
                        <div key={index}>
                            <div
                                className={'package-venue-list-block'}
                                onClick={() => {
                                    setSelectedPackageVenue(item);
                                    console.log(" PackageVenueList -> onClick -> item: ", item);
                                    console.log(" ##### item.id -> ", item.id);
                                    getPackagesByVenueId(item.id).then((resp) => {
                                        console.log(resp.data);
                                        setPackages(resp.data);
                                    });
                                }}
                            >
                                <div
                                    className={'package-venue-list-block-image'}
                                >
                                    <img src="https://picsum.photos/200/100" alt="Venue Photo"/>
                                </div>
                                <div
                                    className={'package-venue-list-block-content'}
                                >
                                    <div className={'package-venue-list-block-content-name'}>{item.location_name}</div>
                                    <div className={'package-venue-list-block-content-type'}>{item.venue_type}</div>
                                    <div
                                        className={'package-venue-list-block-content-seats'}>seats: {item.num_seats}</div>
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