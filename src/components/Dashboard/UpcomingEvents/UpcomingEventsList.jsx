import React from 'react';
import {Image} from "../../Share/Image";

require('./UpcomingEventsList.css');

export default function UpcomingEventsList({upcomingEvents, setSelectedUpcomingEvent}) {
    return (
        <>
            <h1>UpcomingEventsList</h1>
            {
                upcomingEvents.map((item, index) => {
                    return (
                        <div key={index}>
                            <div
                                className={'event-list-block'}
                                onClick={() => {
                                    console.log(" UpcomingEventsList.setSelectedUpcomingEvent(item): ", item);
                                    setSelectedUpcomingEvent(item);
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
                                    <div className={'event-list-block-content-name'}>{item.start_time}</div>
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