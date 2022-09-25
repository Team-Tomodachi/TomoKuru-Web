import {PackageVenueBlock} from "../../Share/PackageVenueBlock";
import PackageList from "./PackageList";

require('./PackageVenueList.css');

export default function PackageVenueList({
                                             venues,
                                             setSelectedPackageVenue,
                                             setPackages
                                         }) {

    return (
        <>
            {
                venues.map((item, index) => {
                    return (
                        <PackageVenueBlock
                            venue={item}
                            setSelectedPackageVenue={setSelectedPackageVenue}
                            setPackages={setPackages}
                        />
                        // <div key={index}>
                        //     <div
                        //         className={'package-venue-list-block'}
                        //         onClick={async () => {
                        //             setPackages([]);
                        //             getPackagesByVenueId(item.id).then((resp) => {
                        //                 setPackages(resp.data);
                        //             });
                        //             setSelectedPackageVenue(item);
                        //         }}
                        //     >
                        //         <div
                        //             className={'package-venue-list-block-image'}
                        //         >
                        //             <Image reference={item.photo_url} alt={item.location_name} />
                        //         </div>
                        //         <div
                        //             className={'package-venue-list-block-content'}
                        //         >
                        //             <div className={'package-venue-list-block-content-name'}>{item.location_name}</div>
                        //             <div className={'package-venue-list-block-content-type'}>{item.venue_type}</div>
                        //             <div
                        //                 className={'package-venue-list-block-content-seats'}>seats: {item.num_seats}</div>
                        //         </div>
                        //     </div>
                        //     <hr/>
                        // </div>
                    )
                })
            }
        </>
    )
}