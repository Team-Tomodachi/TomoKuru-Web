import React, {useState} from 'react';
import {createVenue, getVenuesByUserId} from '../../../api';
import {UserAuth} from '../../../context/AuthContext'
import {uploadFile} from "../../../utilities/firebase-storage";

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

    // Photo
    const [inputPhotoFile, setInputPhotoFile] = useState("");
    const [photoReference, setPhotoReference] = useState("");

    const uploadImage = () => {
        if (!inputPhotoFile) return;
        uploadFile(inputPhotoFile, "venues").then(result => {
            const reference = result.ref.fullPath;
            setPhotoReference(reference);
        });
    };

    const handleVenueCreationSaveButtonClick = async () => {
        console.log("VenueCreation.handleVenueCreationSaveButtonClick(): ")
        try {
            // todo error handling
            uploadImage();

            // todo error handling
            await createVenue({
                user_id: user.id,
                location_name: inputName,
                city_ward: inputCityWard,
                prefecture: inputPrefecture,
                phone_num: inputPhoneNumber,
                address: inputAddress,
                venue_email: inputVenueEmail,
                description: inputDescription,
                num_seats: inputSeatNumber,
                venue_type: inputVenueType,
                photo_url: photoReference,
            });

            // todo error handling
            getVenuesByUserId(user.id).then(resp => {
                setVenues(resp.data);
                setView("Venue");
            });


        } catch (e) {
            // todo: popup window to show error message
            console.error(e);
        }
    }

    return (
        <section id="venue-creation-container">

            <h1 id="venue-creation-title">
                Create a venue
            </h1>

            {/* Name */}
            <div className="mb-6">
                <label htmlFor="venue-creation-input-name"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Name
                </label>
                <input type="text"
                       id="venue-creation-input-name"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={inputName}
                       onChange={(e) => setInputName(e.target.value)}
                />
            </div>
            {/* City / Ward */}
            <div className="mb-6">
                <label htmlFor="venue-creation-input-city-ward"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    City / Ward
                </label>
                <input type="text"
                       id="venue-creation-input-city-ward"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={inputCityWard}
                       onChange={(e) => setInputCityWard(e.target.value)}
                />
            </div>
            {/* Prefecture */}
            <div className="mb-6">
                <label htmlFor="venue-creation-input-prefecture"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Prefecture
                </label>
                <input type="text"
                       id="venue-creation-input-prefecture"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={inputPrefecture}
                       onChange={(e) => setInputPrefecture(e.target.value)}
                />
            </div>
            {/* Phone Number */}
            <div className="mb-6">
                <label htmlFor="venue-creation-input-phone-number"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Phone Number
                </label>
                <input type="text"
                       id="venue-creation-input-phone-number"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={inputPhoneNumber}
                       onChange={(e) => setInputPhoneNumber(e.target.value)}
                />
            </div>
            {/* Address */}
            <div className="mb-6">
                <label htmlFor="venue-creation-input-address"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Address
                </label>
                <input type="text"
                       id="venue-creation-input-address"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={inputAddress}
                       onChange={(e) => setInputAddress(e.target.value)}
                />
            </div>
            {/* Venue Email */}
            <div className="mb-6">
                <label htmlFor="venue-creation-input-venue-email"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Venue Email
                </label>
                <input type="text"
                       id="venue-creation-input-venue-email"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={inputVenueEmail}
                       onChange={(e) => setInputVenueEmail(e.target.value)}
                />
            </div>
            {/* Description */}
            <div className="mb-6">
                <label htmlFor="venue-creation-input-description"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Description
                </label>
                <input type="text"
                       id="venue-creation-input-description"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={inputDescription}
                       onChange={(e) => setInputDescription(e.target.value)}
                />
            </div>
            {/* Seat Number */}
            <div className="mb-6">
                <label htmlFor="venue-creation-input-seat-number"
                       className="form-label inline-block mb-2 text-gray-700">
                    Seat Number
                </label>
                <input
                    type="number"
                    id="exampleNumber0"
                    className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    placeholder="Number input"
                    value={inputSeatNumber}
                    onChange={(e) => setInputSeatNumber(e.target.value)}
                />
            </div>

            {/* Type */}
            <div className="mb-6">
                <label htmlFor="venue-creation-input-type"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Type
                </label>
                <input type="text"
                       id="venue-creation-input-type"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={inputVenueType}
                       onChange={(e) => setInputVenueType(e.target.value)}
                />
            </div>

            {/* Image Upload */}
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                   htmlFor="venue-creation-input-image-upload">
                Upload Image
            </label>
            <input
                className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="venue-creation-input-image-upload"
                type="file"
                accept="image/png, image/jpeg"
                onChange={(e) => {
                    setInputPhotoFile(e.target.files[0]);
                }}
            />

            <section id="venue-creation-button-container">
                <button
                    id="venue-creation-button-save"
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => handleVenueCreationSaveButtonClick()}
                >
                    Save
                </button>
            </section>
        </section>
    )
}