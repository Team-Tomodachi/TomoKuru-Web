import React, {useEffect, useState} from 'react';
import {UserAuth} from "../../../context/AuthContext";
import {deleteEventByEventId, getEventsByVenueId, updateEventByEventId} from "../../../api";
import {uploadFile} from "../../../utilities/firebase-storage";
import ChatRoom from "../../Messages/Messages";

require('./EventDetail.css');

export default function EventDetail({setSelectedEvent, selectedEvent, selectedEventVenue, setEvents, events}) {

    const {user} = UserAuth();

    const [inputName, setInputName] = useState(selectedEvent.name);
    const [inputDescription, setInputDescription] = useState(selectedEvent.description);
    const [inputStartTime, setInputStartTime] = useState(selectedEvent.start_time);
    const [inputEndTime, setInputEndTime] = useState(selectedEvent.end_time);

    useEffect(() => {
        setInputName(selectedEvent.name);
        setInputDescription(selectedEvent.description);
        setInputStartTime(selectedEvent.start_time);
        setInputEndTime(selectedEvent.end_time);
    }, [selectedEvent]);

    // Photo
    const [inputPhotoFile, setInputPhotoFile] = useState("");
    const [photoReference, setPhotoReference] = useState("");

    const uploadImage = () => {
        if (!inputPhotoFile) return;
        uploadFile(inputPhotoFile, "packages").then(result => {
            const reference = result.ref.fullPath;
            setPhotoReference(reference);
        });
    };

    const handleEventDetailSaveButtonClick = async () => {
        try {
            // todo
            uploadImage();

            // todo
            await updateEventByEventId(selectedEvent.id, {
                name: inputName,
                description: inputDescription,
                start_time: inputStartTime,
                end_time: inputEndTime,
                photo_url: photoReference
            });

            // todo
            getEventsByVenueId(selectedEventVenue.id).then((resp) => {
                setEvents(resp.data);
            });

            setSelectedEvent({});

        } catch (e) {
            // todo: popup window to show error message
            console.error(e);
        }
    }

    const handleEventDetailDeleteButtonClick = async () => {
        try {
            await deleteEventByEventId(selectedEvent.id);

            getEventsByVenueId(selectedEventVenue.id).then(resp => {
                setEvents(resp.data);
            });

            setSelectedEvent({});

        } catch (e) {
            // todo: popup window to show error message
            console.error(e);
        }
    }

    return (
        <>
            <section id="event-detail-container">

                <div id="event-detail-info">

                    <h1>Event Detail for Venue: {selectedEventVenue.location_name}</h1>
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
                    <label htmlFor="message"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
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
                           htmlFor="event-detail-input-image-upload">
                        Upload Image
                    </label>
                    <input
                        className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="event-detail-input-image-upload"
                        type="file"
                        accept="image/png, image/jpeg"
                        onChange={(e) => {
                            setInputPhotoFile(e.target.files[0]);
                        }}
                    />

                    {/* Save Button */}
                    <section id="event-detail-button-container">
                        <button
                            id="event-detail-button-save"
                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                            onClick={() => handleEventDetailSaveButtonClick()}
                        >
                            Save
                        </button>
                        <button
                            id="event-detail-button-delete"
                            className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                            onClick={() => handleEventDetailDeleteButtonClick()}
                        >
                            Delete
                        </button>
                    </section>
                </div>

                <div id="dashboard-chat">
                    <h1>Event Chat for: {selectedEvent.name}</h1>
                    <ChatRoom event_id={selectedEvent.id}/>
                </div>
            </section>
        </>
    )
}
