import {PackageVenueBlock} from "../../Share/PackageVenueBlock";

require('./PackageVenueList.css');

export default function PackageVenueList({venues, setSelectedPackageVenue, setPackages}) {

    return (
        <>
            {venues.map((item) => {
                return (<PackageVenueBlock
                    venue={item}
                    setSelectedPackageVenue={setSelectedPackageVenue}
                    setPackages={setPackages}
                />)
            })}
        </>
    )
}