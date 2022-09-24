import {VenueBlock} from "../../Share/VenueBlock";
import {CreationBlock} from "../../Share/CreationBlock";

require('./VenueList.css');

export default function VenueList({venues, setSelectedVenue, setView}) {

    return (
        <>
            {/* Venue Creation Button */}
            {venues ? (
                <CreationBlock
                    setView={setView}
                    view={"VenueCreation"}
                />
            ) : null}

            {/* Venue List */}
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