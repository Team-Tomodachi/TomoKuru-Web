import React, {useEffect, useState} from 'react';
import {createVenue, getVenuesByUserId} from '../../../api';
import {UserAuth} from '../../../context/AuthContext'

require('./VenueCreation.css');

export default function VenueCreation({setVenues, setView}) {

    const {user} = UserAuth();

    const [inputName, setInputName] = useState("");
    const [inputCityWard, setInputCityWard] = useState("");
    const [inputPrefecture, setInputPrefecture] = useState("");
    const [inputPhoneNumber, setInputPhoneNumber] = useState("");
    const [inputAddress, setInputAddress] = useState("");
    const [inputVenueEmail, setInputVenueEmail] = useState("");
    const [inputDescription, setInputDescription] = useState("");
    const [inputSeatNumber, setInputSeatNumber] = useState(0);
    const [inputVenueType, setInputVenueType] = useState("");

    const handleVenueCreationSaveButtonClick = async () => {
        console.log("handleVenueCreationSaveButtonClick: ")
        try {
            console.log(inputName);
            console.log(inputCityWard);
            console.log(inputPrefecture);
            console.log(inputPhoneNumber);
            console.log(inputAddress);
            console.log(inputVenueEmail);
            console.log(inputDescription);
            console.log(inputSeatNumber);
            // todo: backend has no venue type
            console.log(inputVenueType);
            let result = await createVenue({
                "user_id": user.id,
                "location_name": inputName,
                "city_ward": inputCityWard,
                "prefecture": inputPrefecture,
                "phone_num": inputPhoneNumber,
                "address": inputAddress,
                "venue_email": inputVenueEmail,
                "description": inputDescription,
                "num_seats": inputSeatNumber,
            });
            console.log('createVenue: ', result);

            getVenuesByUserId(user.id).then(resp => {
                setVenues(resp.data);
                console.log("getVenues: ", resp.data);
                setView("Venue");
            });

        } catch (e) {
            // todo: popup window to show error message
            console.error(e);
        }
    }

    return (
        <>
            <h1 id={'venue-detail-name'}>Venue Detail</h1>
            {/* Name */}
            <div className="mb-6">
                <label htmlFor="venue-detail-input-name"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Name *
                </label>
                <input type="text"
                       id="venue-detail-input-name"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       onChange={(e) => setInputName(e.target.value)}
                />
            </div>
            {/* City / Ward */}
            <div className="mb-6">
                <label htmlFor="venue-detail-input-city-ward"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    City / Ward *
                </label>
                <input type="text"
                       id="venue-detail-input-city-ward"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       onChange={(e) => setInputCityWard(e.target.value)}
                />
            </div>
            {/* Prefecture */}
            <div className="mb-6">
                <label htmlFor="venue-detail-input-prefecture"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Prefecture *
                </label>
                <input type="text"
                       id="venue-detail-input-prefecture"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       onChange={(e) => setInputPrefecture(e.target.value)}
                />
            </div>
            {/* Phone Number */}
            <div className="mb-6">
                <label htmlFor="venue-detail-input-phone-number"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Phone Number
                </label>
                <input type="text"
                       id="venue-detail-input-phone-number"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       onChange={(e) => setInputPhoneNumber(e.target.value)}
                />
            </div>
            {/* Address */}
            <div className="mb-6">
                <label htmlFor="venue-detail-input-address"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Address
                </label>
                <input type="text"
                       id="venue-detail-input-address"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       onChange={(e) => setInputAddress(e.target.value)}
                />
            </div>
            {/* Venue Email */}
            <div className="mb-6">
                <label htmlFor="venue-detail-input-venue-email"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Venue Email
                </label>
                <input type="text"
                       id="venue-detail-input-venue-email"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       onChange={(e) => setInputVenueEmail(e.target.value)}
                />
            </div>
            {/* Description */}
            <div className="mb-6">
                <label htmlFor="venue-detail-input-description"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Description
                </label>
                <input type="text"
                       id="venue-detail-input-description"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       onChange={(e) => setInputDescription(e.target.value)}
                />
            </div>
            {/* Seat Number */}
            <div class="mb-6">
                <label htmlFor="venue-detail-input-seat-number"
                       className="form-label inline-block mb-2 text-gray-700">
                    Seat Number
                </label>
                <input
                    type="number"
                    id="exampleNumber0"
                    className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    placeholder="Number input"
                    onChange={(e) => setInputSeatNumber(e.target.value)}
                />
            </div>
            {/* Type */}
            <div className="mb-6">
                <label htmlFor="venue-detail-input-type"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Type
                </label>
                <input type="text"
                       id="venue-detail-input-type"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       onChange={(e) => setInputVenueType(e.target.value)}
                />
            </div>
            <div className="mb-6">
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => handleVenueCreationSaveButtonClick()}
                >
                    Create
                </button>
            </div>
        </>
    )
}