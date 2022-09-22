import React, {useEffect, useState} from "react";
import {UserAuth} from "../../../context/AuthContext";
import {
    updatePackageByPackageId,
    getPackagesByVenueId,
    deletePackageByPackageId,
} from "../../../api";
import {getFileUrl} from "../../../utilities/firebase-storage";

require("./PackageDetail.css");

export default function PackageDetail({
                                          selectedPackage,
                                          selectedPackageVenue,
                                          setPackages,
                                      }) {
    const {user} = UserAuth();

    const [inputName, setInputName] = useState(selectedPackage.package_name);
    const [inputPackagePerPersonCost, setInputPackagePerPersonCost] = useState(selectedPackage.package_per_person_cost);
    const [inputDuration, setInputDuration] = useState(selectedPackage.duration);
    const [inputMaximumNumberOfPeople, setInputMaximumNumberOfPeople] = useState(selectedPackage.maximum_number_of_people);
    const [inputPhotoUrl, setInputPhotoUrl] = useState(selectedPackage.photo_url);
    const [inputOtherNotes, setInputOtherNotes] = useState(selectedPackage.other_notes);
    const [inputDrinks, setInputDrinks] = useState(selectedPackage.drinks);
    const [inputFood, setInputFood] = useState(selectedPackage.food);
    const [inputDescription, setInputDescription] = useState(selectedPackage.description);

    useEffect(() => {
        setInputName(selectedPackage.package_name);
        setInputPackagePerPersonCost(selectedPackage.package_per_person_cost);
        setInputDuration(selectedPackage.duration);
        setInputMaximumNumberOfPeople(selectedPackage.maximum_number_of_people);
        setInputOtherNotes(selectedPackage.other_notes);
        setInputDrinks(selectedPackage.drinks);
        setInputFood(selectedPackage.food);
        setInputDescription(selectedPackage.description);

        // Photo
        getFileUrl(selectedPackage.photo_url).then(result => {
            setInputPhotoUrl(result);
        });

    }, [selectedPackage]);

    const handlePackageDetailSaveButtonClick = async () => {
        console.log("PackageDetail.handleEventDetailSaveButtonClick(): ");
        try {
            console.log("selectedPackage.id: ", selectedPackage.id);
            await updatePackageByPackageId(selectedPackage.id, {
                package_name: inputName,
                package_per_person_cost: inputPackagePerPersonCost,
                duration: inputDuration,
                maximum_number_of_people: inputMaximumNumberOfPeople,
                photo_url: inputPhotoUrl,
                other_notes: inputOtherNotes,
                drinks: inputDrinks,
                food: inputFood,
                description: inputDescription,
            });

            getPackagesByVenueId(selectedPackageVenue.id).then((resp) => {
                setPackages(resp.data);
            });
        } catch (e) {
            // todo: popup window to show error message
            console.error(e);
        }
    };

    const handlePackageDetailDeleteButtonClick = async () => {
        console.log("PackageDetail.handlePackageDetailDeleteButtonClick(): ");
        try {
            console.log("selectedPackage.id: ", selectedPackage.id);
            await deletePackageByPackageId(selectedPackage.id);

            getPackagesByVenueId(selectedPackageVenue.id).then((resp) => {
                setPackages(resp.data);
            });
        } catch (e) {
            // todo: popup window to show error message
            console.error(e);
        }
    };

    return (
        <>
            <h1>Package Detail</h1>
            {/* Name */}
            <div className="mb-6">
                <label
                    htmlFor="venue-detail-input-name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Package Name
                </label>
                <input
                    type="text"
                    id="venue-detail-input-name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                />
            </div>
            {/* Cost(per person) */}
            <div className="mb-6">
                <label
                    htmlFor="venue-detail-input-cost"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Cost(per person)
                </label>
                <input
                    type="number"
                    id="venue-detail-input-cost"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={inputPackagePerPersonCost}
                    onChange={(e) => setInputPackagePerPersonCost(e.target.value)}
                />
            </div>
            {/* Duration(minutes) */}
            <div className="mb-6">
                <label
                    htmlFor="venue-detail-input-name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Duration(minutes)
                </label>
                <input
                    type="number"
                    id="venue-detail-input-name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={inputDuration}
                    onChange={(e) => setInputDuration(e.target.value)}
                />
            </div>
            {/* Maximum number of people */}
            <div className="mb-6">
                <label
                    htmlFor="venue-detail-input-name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Maximum number of people
                </label>
                <input
                    type="number"
                    id="venue-detail-input-name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={inputMaximumNumberOfPeople}
                    onChange={(e) => setInputMaximumNumberOfPeople(e.target.value)}
                />
            </div>
            {/* Photo URL */}
            <div className="mb-6">
                <label
                    htmlFor="venue-detail-input-photo-url"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Photo URL
                </label>
                <input
                    type="text"
                    id="venue-detail-input-photo-url"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={inputPhotoUrl}
                    onChange={(e) => setInputPhotoUrl(e.target.value)}
                />
            </div>
            {/* Other Notes */}
            <div className="mb-6">
                <label
                    htmlFor="venue-detail-input-name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Other Notes
                </label>
                <input
                    type="text"
                    id="venue-detail-input-name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={inputOtherNotes}
                    onChange={(e) => setInputOtherNotes(e.target.value)}
                />
            </div>
            {/* Drinks */}
            <div className="mb-6">
                <label
                    htmlFor="venue-detail-input-name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Drinks
                </label>
                <input
                    type="text"
                    id="venue-detail-input-name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={inputDrinks}
                    onChange={(e) => setInputDrinks(e.target.value)}
                />
            </div>
            {/* Food */}
            <div className="mb-6">
                <label
                    htmlFor="venue-detail-input-name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Food
                </label>
                <input
                    type="text"
                    id="venue-detail-input-name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={inputFood}
                    onChange={(e) => setInputFood(e.target.value)}
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

            {/* Save Button */}
            <div className="mb-6">
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => handlePackageDetailSaveButtonClick()}
                >
                    Save
                </button>
            </div>

            {/* Delete Button */}
            <div className="mb-6">
                <button
                    className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                    onClick={() => handlePackageDetailDeleteButtonClick()}
                >
                    Delete
                </button>
            </div>
        </>
    );
}
