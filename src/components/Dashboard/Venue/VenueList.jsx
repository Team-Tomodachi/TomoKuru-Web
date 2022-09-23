import {VenueBlock} from "../../Share/VenueBlock";

require('./VenueList.css');

export default function VenueList({venues, setSelectedVenue}) {

    return (
        <>
            {venues.map((item) => {
                return (
                    <VenueBlock
                        venue={item}
                        setSelectedVenue={setSelectedVenue}
                    />
                )
            })}
        </>
    )
}