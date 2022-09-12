import React, {useEffect, useState} from 'react';
import {deleteVenueById, getVenuesByUserId, updateVenueById} from "../../../api";
import {UserAuth} from '../../../context/AuthContext'

require('./VenueDetail.css');

export default function VenueDetail({setView, setVenues, venues, setSelectedVenue, selectedVenue}) {

    const {user} = UserAuth();

    const [inputName, setInputName] = useState(selectedVenue.location_name);
    const [inputCityWard, setInputCityWard] = useState(selectedVenue.city_ward);
    const [inputPrefecture, setInputPrefecture] = useState(selectedVenue.prefecture);
    const [inputPhoneNumber, setInputPhoneNumber] = useState(selectedVenue.phone_num);
    const [inputAddress, setInputAddress] = useState(selectedVenue.address);
    const [inputVenueEmail, setInputVenueEmail] = useState(selectedVenue.venue_email);
    const [inputDescription, setInputDescription] = useState(selectedVenue.description);
    const [inputSeatNumber, setInputSeatNumber] = useState(selectedVenue.num_seats);
    const [inputVenueType, setInputVenueType] = useState(selectedVenue.venue_type);

    useEffect(() => {
        setInputName(selectedVenue.location_name);
        setInputCityWard(selectedVenue.city_ward);
        setInputPrefecture(selectedVenue.prefecture);
        setInputPhoneNumber(selectedVenue.phone_num);
        setInputAddress(selectedVenue.address);
        setInputVenueEmail(selectedVenue.venue_email);
        setInputDescription(selectedVenue.description);
        setInputSeatNumber(selectedVenue.num_seats);
        setInputVenueType(selectedVenue.venue_type);
    }, [selectedVenue]);

    const handleVenueDetailSaveButtonClick = async () => {
        console.log("handleVenueDetailSaveButtonClick: ")
        try {
            console.log(" ---------- VenueDetail Save ---------- ")
            console.log("Venue ID: ", selectedVenue.id);
            console.log("Name: ", selectedVenue.location_name);
            console.log("City/Ward: ", selectedVenue.city_ward);
            console.log("Prefecture: ", selectedVenue.prefecture);
            console.log("Phone Number: ", selectedVenue.phone_num);
            console.log("Address: ", selectedVenue.address);
            console.log("Venue Email: ", selectedVenue.venue_email);
            console.log("Description: ", selectedVenue.description);
            console.log("Seat Number: ", selectedVenue.num_seats);
            console.log("Venue Type: ", selectedVenue.venue_type);
            console.log(" ---------- VenueDetail Save ---------- ")
            console.log('updateVenueById: ID --> ', selectedVenue.id);
            let result = await updateVenueById(selectedVenue.id, {
                location_name: inputName,
                city_ward: inputCityWard,
                prefecture: inputPrefecture,
                phone_num: inputPhoneNumber,
                address: inputAddress,
                venue_email: inputVenueEmail,
                description: inputDescription,
                num_seats: inputSeatNumber,
                venue_type: inputVenueType,
            });
            console.log('updateVenueById: ', result);

            setView("Venue");
            getVenuesByUserId(user.id).then(resp => {
                setVenues(resp.data);
                console.log("getVenuesByUserId: ", resp.data);
            });

        } catch (e) {
            // todo: popup window to show error message
            console.error(e);
        }
    }

    const handleVenueDetailDeleteButtonClick = async () => {
        console.log("handleVenueDetailDeleteButtonClick: id: ", selectedVenue.id)
        try {
            let result = await deleteVenueById(selectedVenue.id);
            console.log('updateVenueById: ', result);

            // remove exising venue list
            let removeIndex = venues.map(item => item.id).indexOf(selectedVenue.id);
            venues.splice(removeIndex, 1);

            getVenuesByUserId(user.id).then(resp => {
                setVenues(resp.data);
                console.log("getVenuesByUserId: ", resp.data);
            });

        } catch (e) {
            // todo: popup window to show error message
            console.error(e);
        }
    }

    return venues ? (
        <>
            <h1 id={'venue-detail-name'}>Venue Detail</h1>
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
            {/* City / Ward */}
            <div className="mb-6">
                <label htmlFor="venue-detail-input-city-ward"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    City / Ward
                </label>
                <input type="text"
                       id="venue-detail-input-city-ward"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={inputCityWard}
                       onChange={(e) => setInputCityWard(e.target.value)}
                />
            </div>
            {/* Prefecture */}
            <div className="mb-6">
                <label htmlFor="venue-detail-input-prefecture"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Prefecture
                </label>
                <input type="text"
                       id="venue-detail-input-prefecture"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={inputPrefecture}
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
                    value={inputPhoneNumber}
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
                    value={inputAddress}
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
                    value={inputVenueEmail}
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
                    value={inputDescription}
                    onChange={(e) => setInputDescription(e.target.value)}
                />
            </div>
            {/* Seat Number */}
            <div className="mb-6">
                <label htmlFor="venue-detail-input-seat-number"
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
                <label htmlFor="venue-detail-input-type"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Type
                </label>
                <input type="text"
                       id="venue-detail-input-type"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={inputVenueType}
                    onChange={(e) => setInputVenueType(e.target.value)}
                />
            </div>
            <div className="mb-6">
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => handleVenueDetailSaveButtonClick()}
                >
                    Save
                </button>
            </div>
            <div className="mb-6">
                <button
                    className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                    onClick={() => handleVenueDetailDeleteButtonClick()}
                >
                    Delete
                </button>
            </div>
        </>
    ) : null
}