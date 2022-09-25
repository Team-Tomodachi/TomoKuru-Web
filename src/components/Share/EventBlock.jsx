import {Image} from "./Image";

require("./Image.css")
require('./EventBlock.css');

export function EventBlock({event, setSelectedEvent}) {
    return (
        <>
            {/* container */}
            <div className="event-block-container"
                 key={event.id}
                 onClick={() => {
                     setSelectedEvent(event);
                 }}
            >

                {/* image */}
                <div className={'event-block-image'}>
                    <Image reference={event.photo_url} alt={event.name}/>
                </div>

                {/* content */}
                <div className="event-block-content">
                    {/* name */}
                    <div className="event-block-content-name">{event.name}</div>
                    {/* start time */}
                    <div className="event-block-content-start-time">{event.start_time}</div>
                </div>

            </div>
        </>
    )
}