import React, {useEffect, useState} from 'react';

require('./EventsWithoutVenueDetail.css');

export default function EventsWithoutVenueDetail({selectedEventWithoutVenue}) {

    const [inputName, setInputName] = useState(selectedEventWithoutVenue.name);
    const [inputDescription, setInputDescription] = useState(selectedEventWithoutVenue.description);
    const [inputStartTime, setInputStartTime] = useState(selectedEventWithoutVenue.start_time);
    const [inputEndTime, setInputEndTime] = useState(selectedEventWithoutVenue.end_time);
    const [inputCreator, setInputCreator] = useState(selectedEventWithoutVenue.first_name);
    const [inputEmail, setInputEmail] = useState(selectedEventWithoutVenue.email);

    useEffect(() => {
        setInputName(selectedEventWithoutVenue.name);
        setInputDescription(selectedEventWithoutVenue.description);
        setInputStartTime(selectedEventWithoutVenue.start_time);
        setInputEndTime(selectedEventWithoutVenue.end_time);
        setInputCreator(selectedEventWithoutVenue.first_name)
        setInputEmail(selectedEventWithoutVenue.email);
    }, [selectedEventWithoutVenue]);

    return (
        <>
            {/* Name */}
            <div className="mb-6">
                <label htmlFor="venue-detail-input-name"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Name
                </label>
                <input type="text"
                       id="venue-detail-input-name"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={inputName}
                       onChange={(e) => setInputName(e.target.value)}
                />
            </div>

            {/* Description */}
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Description
            </label>
            <textarea id="message" rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={inputDescription}
                      onChange={(e) => setInputDescription(e.target.value)}
            ></textarea>

            {/* Start Time */}
            <div className="mb-6">
                <label htmlFor="venue-detail-input-name"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Start Time
                </label>
                <input type="text"
                       id="venue-detail-input-name"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={inputStartTime}
                       onChange={(e) => setInputStartTime(e.target.value)}
                />
            </div>

            {/* End Time */}
            <div className="mb-6">
                <label htmlFor="venue-detail-input-name"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    End Time
                </label>
                <input type="text"
                       id="venue-detail-input-name"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={inputEndTime}
                       onChange={(e) => setInputEndTime(e.target.value)}
                />
            </div>

            {/* Creator */}
            <div className="mb-6">
                <label htmlFor="venue-detail-input-creator"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Creator
                </label>
                <input type="text"
                       id="venue-detail-input-creator"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={inputCreator}
                       onChange={(e) => setInputCreator(e.target.value)}
                />
            </div>

            {/* Email */}
            <div className="mb-6">
                <label htmlFor="venue-detail-input-email"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Email
                </label>
                <input type="text"
                       id="venue-detail-input-email"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={inputEmail}
                       onChange={(e) => setInputEmail(e.target.value)}
                />
            </div>
        </>
    )
}