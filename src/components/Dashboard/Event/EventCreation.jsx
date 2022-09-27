import React, {useState} from 'react';
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
        console.log("EventCreation.handleEventCreationSaveButtonClick(): ")
        try {
            // todo error handling
            uploadImage();

            // todo error handling
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

            // todo error handling
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
        <section id="event-creation-container">
            <h1>
                Create Event for Venue: {" "}
                <span id={"event-creation-title"}>{selectedEventVenue.location_name}</span>
            </h1>

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

            {/* Image Upload */}
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                   htmlFor="event-creation-input-image-upload">
                Upload Image
            </label>
            <input
                className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="event-creation-input-image-upload"
                type="file"
                accept="image/png, image/jpeg"
                onChange={(e) => {
                    setInputPhotoFile(e.target.files[0]);
                }}
            />

            {/* Save Button */}
            <section id="event-creation-button-container">
                <button
                    id="event-creation-button-save"
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => handleEventCreationSaveButtonClick()}
                >
                    Save
                </button>
            </section>

        </section>
    )
}
