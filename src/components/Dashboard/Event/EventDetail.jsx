import React, { useEffect, useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import {
  deleteEventByEventId,
  getEventsByVenueId,
  updateEventByEventId,
} from "../../../api";
import ChatRoom from "../../Messages/Messages";

require("./EventDetail.css");

export default function EventDetail({
  selectedEvent,
  selectedEventVenue,
  setEvents,
  events,
}) {
  const { user } = UserAuth();

  const [inputName, setInputName] = useState(selectedEvent.name);
  const [inputDescription, setInputDescription] = useState(
    selectedEvent.description
  );
  const [inputStartTime, setInputStartTime] = useState(
    selectedEvent.start_time
  );
  const [inputEndTime, setInputEndTime] = useState(selectedEvent.end_time);

  useEffect(() => {
    setInputName(selectedEvent.name);
    setInputDescription(selectedEvent.description);
    setInputStartTime(selectedEvent.start_time);
    setInputEndTime(selectedEvent.end_time);
  }, [selectedEvent]);

  const handleEventDetailSaveButtonClick = async () => {
    console.log("handleEventDetailSaveButtonClick: ");
    console.log("selectedEvent.id: ", selectedEvent.id);
    try {
      await updateEventByEventId(selectedEvent.id, {
        name: inputName,
        description: inputDescription,
        start_time: inputStartTime,
        end_time: inputEndTime,
      });

      console.log("selectedEventVenue.id: ", selectedEventVenue.id);
      getEventsByVenueId(selectedEventVenue.id).then((resp) => {
        setEvents(resp.data);
      });
    } catch (e) {
      // todo: popup window to show error message
      console.error(e);
    }
  };

  const handleEventDetailDeleteButtonClick = async () => {
    console.log("handleEventDetailDeleteButtonClick: ");
    console.log("selectedEvent.id: ", selectedEvent.id);
    try {
      await deleteEventByEventId(selectedEvent.id);

      console.log("selectedEventVenue.id: ", selectedEventVenue.id);
      getEventsByVenueId(selectedEventVenue.id).then((resp) => {
        setEvents(resp.data);
      });
    } catch (e) {
      // todo: popup window to show error message
      console.error(e);
    }
  };

  return (
    <>
      <h1>Event Detail for Venue: {selectedEventVenue.location_name}</h1>
      <hr />
      {/* Name */}
      <div className="mb-6">
        <label
          htmlFor="venue-detail-input-name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Name
        </label>
        <input
          type="text"
          id="venue-detail-input-name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
      </div>

      {/* Description */}
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        Description
      </label>
      <textarea
        id="message"
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={inputDescription}
        onChange={(e) => setInputDescription(e.target.value)}
      ></textarea>

      {/* Start Time */}
      <div className="mb-6">
        <label
          htmlFor="venue-detail-input-name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Start Time
        </label>
        <input
          type="text"
          id="venue-detail-input-name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={inputStartTime}
          onChange={(e) => setInputStartTime(e.target.value)}
        />
      </div>

      {/*<div className="relative">*/}
      {/*    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">*/}
      {/*        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"*/}
      {/*             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">*/}
      {/*            <path fill-rule="evenodd"*/}
      {/*                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"*/}
      {/*                  clip-rule="evenodd"></path>*/}
      {/*        </svg>*/}
      {/*    </div>*/}
      {/*    <input datepicker type="text"*/}
      {/*           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"*/}
      {/*           placeholder="Select date" />*/}
      {/*</div>*/}

      {/* End Time */}
      <div className="mb-6">
        <label
          htmlFor="venue-detail-input-name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Start Time
        </label>
        <input
          type="text"
          id="venue-detail-input-name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={inputEndTime}
          onChange={(e) => setInputEndTime(e.target.value)}
        />
      </div>

      {/* Save Button */}
      <div className="mb-6">
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => handleEventDetailSaveButtonClick()}
        >
          Save
        </button>
      </div>

      {/* Delete Button */}
      <div className="mb-6">
        <button
          className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
          onClick={() => handleEventDetailDeleteButtonClick()}
        >
          Delete
        </button>
      </div>

      <ChatRoom event_id={selectedEvent.id} />
    </>
  );
}
