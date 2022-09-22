import React from 'react';
import {Image} from "../../Share/Image";

require('./HostedEventsList.css');

export default function HostedEventsList({hostedEvents, setSelectedHostedEvent}) {
    return (
        <>
            <h1>HostedEventsList</h1>
            {
                hostedEvents.map((item, index) => {
                    return (
                        <div key={index}>
                            <div
                                className={'event-list-block'}
                                onClick={() => {
                                    console.log(" HostedEventsList.setSelectedHostedEvent(item): ", item);
                                    setSelectedHostedEvent(item);
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