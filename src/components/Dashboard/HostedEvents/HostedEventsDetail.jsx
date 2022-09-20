import React, {useEffect, useState} from 'react';

require('./HostedEventsDetail.css');

export default function HostedEventsDetail({selectedHostedEvent}) {

    const [inputEventName, setInputEventName] = useState(selectedHostedEvent.name);
    const [inputDescription, setInputDescription] = useState(selectedHostedEvent.description);
    const [inputStartTime, setInputStartTime] = useState(selectedHostedEvent.start_time);
    const [inputEndTime, setInputEndTime] = useState(selectedHostedEvent.end_time);
    const [inputCapacity, setInputCapacity] = useState(selectedHostedEvent.capacity);
    const [inputVenueName, setInputVenueName] = useState(selectedHostedEvent.location_name);
    const [inputPhotoUrl, setInputPhotoUrl] = useState(selectedHostedEvent.photo_url);
    const [inputUserName, setInputUserName] = useState(selectedHostedEvent.first_name);
    const [inputUserEmail, setInputUserEmail] = useState(selectedHostedEvent.email);

    useEffect(() => {
        setInputEventName(selectedHostedEvent.name);
        setInputDescription(selectedHostedEvent.description);
        setInputStartTime(selectedHostedEvent.start_time);
        setInputEndTime(selectedHostedEvent.end_time);
        setInputCapacity(selectedHostedEvent.capacity);
        setInputVenueName(selectedHostedEvent.location_name);
        setInputPhotoUrl(selectedHostedEvent.photo_url);
        setInputUserName(selectedHostedEvent.first_name);
        setInputUserEmail(selectedHostedEvent.email);
    }, [selectedHostedEvent]);

    return (
        <>
            {/* Event Name */}
            <div className="mb-6">
                <label htmlFor="hosted-events-input-name"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Event Name
                </label>
                <input type="text"
                       id="hosted-events-input-name"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={inputEventName}
                       onChange={(e) => setInputEventName(e.target.value)}
                />
            </div>

            {/* Description */}
            <label htmlFor="hosted-events-input-description"
                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Description
            </label>
            <textarea id="hosted-events-input-description" rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={inputDescription}
                      onChange={(e) => setInputDescription(e.target.value)}
            ></textarea>

            {/* Start Time */}
            <div className="mb-6">
                <label htmlFor="hosted-events-input-start-time"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Start Time
                </label>
                <input type="text"
                       id="hosted-events-input-start-time"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={inputStartTime}
                       onChange={(e) => setInputStartTime(e.target.value)}
                />
            </div>

            {/* End Time */}
            <div className="mb-6">
                <label htmlFor="hosted-events-input-end-time"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    End Time
                </label>
                <input type="text"
                       id="hosted-events-input-end-time"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={inputEndTime}
                       onChange={(e) => setInputEndTime(e.target.value)}
                />
            </div>

            {/* Capacity */}
            <div className="mb-6">
                <label htmlFor="hosted-events-input-capacity"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    End Time
                </label>
                <input type="number"
                       id="hosted-events-input-capacity"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={inputCapacity}
                       onChange={(e) => setInputCapacity(e.target.value)}
                />
            </div>

            {/* Venue */}
            <div className="mb-6">
                <label htmlFor="hosted-events-input-venue-name"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Venue Name
                </label>
                <input type="text"
                       id="hosted-events-input-venue-name"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={inputVenueName}
                       onChange={(e) => setInputVenueName(e.target.value)}
                />
            </div>

            {/* Event Name */}
            <div className="mb-6">
                <label htmlFor="hosted-events-input-event-name"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Venue Name
                </label>
                <input type="text"
                       id="hosted-events-input-event-name"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={inputEventName}
                       onChange={(e) => setInputVenueName(e.target.value)}
                />
            </div>

            {/* PhotoUrl */}
            <div className="mb-6">
                <label htmlFor="hosted-events-input-photo-url"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Photo Url
                </label>
                <input type="text"
                       id="hosted-events-input-photo-url"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={inputPhotoUrl}
                       onChange={(e) => setInputPhotoUrl(e.target.value)}
                />
            </div>

            {/* User Name */}
            <div className="mb-6">
                <label htmlFor="hosted-events-user-name"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    User Name
                </label>
                <input type="text"
                       id="hosted-events-user-name"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={inputUserName}
                       onChange={(e) => setInputUserName(e.target.value)}
                />
            </div>

            {/* Event Email */}
            <div className="mb-6">
                <label htmlFor="hosted-events-input-email"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Email
                </label>
                <input type="text"
                       id="hosted-events-input-email"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={inputUserEmail}
                       onChange={(e) => setInputEventName(e.target.value)}
                />
            </div>
        </>
    )
}