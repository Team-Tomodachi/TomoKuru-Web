import React, {useEffect, useState} from 'react';
import {UserAuth} from "../../../context/AuthContext";
import {createEventByVenueId, getEventsByVenueId} from "../../../api";
import {uploadFile} from "../../../utilities/firebase-storage";

require('./EventCreation.css');

export default function EventCreation({setView, setEvents, selectedEventVenue}) {

    const {user} = UserAuth();

    const [inputName, setInputName] = useState("");
    const [inputDescription, setInputDescription] = useState("");
    const [inputStartTime, setInputStartTime] = useState("");
    const [inputEndTime, setInputEndTime] = useState("");

    // Photo
    const [inputPhotoFile, setInputPhotoFile] = useState("");
    const [photoReference, setPhotoReference] = useState("");

    const uploadImage = () => {
        if (!inputPhotoFile) return;
        uploadFile(inputPhotoFile, "events").then(result => {
            const reference = result.ref.fullPath;
            setPhotoReference(reference);
            console.log("uploadImage(): ", reference);
        });
    };

    const handleEventCreationSaveButtonClick = async () => {
        console.log("handleVenueCreationSaveButtonClick: ")
        try {
            await createEventByVenueId({
                "user_id": user.id,
                "venue_id": selectedEventVenue.id,
                "name": inputName,
                "description": inputDescription,
                "date": Date.now().toString(),
                "start_time": inputStartTime,
                "end_time": inputEndTime,
                photo_url: photoReference
            });

            getEventsByVenueId(selectedEventVenue.id).then(resp => {
                setEvents(resp.data);
                setView("Event");
            });

        } catch (e) {
            // todo: popup window to show error message
            console.error(e);
        }
    }


    return (
        <>
            <h1>Create an Event for Venue: {selectedEventVenue.location_name}</h1>
            <hr/>
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
                    Start Time
                </label>
                <input type="text"
                       id="venue-detail-input-name"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={inputEndTime}
                       onChange={(e) => setInputEndTime(e.target.value)}
                />
            </div>

            {/* Photo */}
            <div className="mb-6">
                <label
                    htmlFor="venue-detail-input-photo-url"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Photo
                </label>
                <input
                    type="file"
                    name="package-image"
                    id="venue-detail-input-photo-url"
                    accept="image/png, image/jpeg"
                    onChange={(e) => {
                        setInputPhotoFile(e.target.files[0]);
                    }}
                />
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={uploadImage}
                >
                    Upload Image
                </button>
            </div>

            {/* Save Button */}
            <div className="mb-6">
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => handleEventCreationSaveButtonClick()}
                >
                    Save
                </button>
            </div>

        </>
    )
}
