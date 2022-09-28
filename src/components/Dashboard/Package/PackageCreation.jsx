import React, {useState} from "react";
import {createPackageByVenueId, getPackagesByVenueId} from "../../../api";
import {uploadFile} from "../../../utilities/firebase-storage";

require("./PackageCreation.css");

export default function PackageCreation({
                                            setView,
                                            setPackages,
                                            selectedPackageVenue,
                                        }) {
    const [inputName, setInputName] = useState("");
    const [inputPackagePerPersonCost, setInputPackagePerPersonCost] = useState(0);
    const [inputDuration, setInputDuration] = useState(0);
    const [inputMaximumNumberOfPeople, setInputMaximumNumberOfPeople] = useState(0);
    const [inputOtherNotes, setInputOtherNotes] = useState("");
    const [inputDrinks, setInputDrinks] = useState("");
    const [inputFood, setInputFood] = useState("");
    const [inputDescription, setInputDescription] = useState("");

    // Photo
    const [inputPhotoFile, setInputPhotoFile] = useState("");

    const handlePackageCreationSaveButtonClick = async () => {
        console.log("PackageCreation.handlePackageCreationSaveButtonClick(): ");
        try {
            let photoReference;
            if (inputPhotoFile) {
                await uploadFile(inputPhotoFile, "packages").then(result => {
                    photoReference = result.ref.fullPath;
                });
            }

            // todo error handling
            await createPackageByVenueId({
                venue_id: selectedPackageVenue.id,
                package_name: inputName,
                package_per_person_cost: inputPackagePerPersonCost,
                duration: inputDuration,
                maximum_number_of_people: inputMaximumNumberOfPeople,
                photo_url: photoReference,
                other_notes: inputOtherNotes,
                drinks: inputDrinks,
                food: inputFood,
                description: inputDescription,
            });

            // todo error handling
            getPackagesByVenueId(selectedPackageVenue.id).then((resp) => {
                setPackages(resp.data);
                setView("Package");
            });
        } catch (e) {
            // todo: popup window to show error message
            console.error(e);
        }
    };

    return (
        <section id="package-creation-container">
            <h1>
                Create Package for Venue: {" "}
                <span id={"package-creation-title"}>{selectedPackageVenue.location_name}</span>
            </h1>

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
                id="package-creation-input-"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={inputDescription}
                onChange={(e) => setInputDescription(e.target.value)}
            ></textarea>

            {/* Image Upload */}
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                   htmlFor="package-creation-input-image-upload">
                Upload Image
            </label>
            <input
                className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="package-creation-input-image-upload"
                type="file"
                accept="image/png, image/jpeg"
                onChange={(e) => {
                    setInputPhotoFile(e.target.files[0]);
                }}
            />

            {/* Save Button */}
            <section id="package-creation-button-container">
                <button
                    id="package-creation-button-save"
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => handlePackageCreationSaveButtonClick()}
                >
                    Save
                </button>
            </section>
        </section>
    );
}