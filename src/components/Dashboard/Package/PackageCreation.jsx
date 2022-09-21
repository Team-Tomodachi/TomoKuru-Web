import React, {useState} from "react";
import {
    createPackageByVenueId,
    getEventsByVenueId,
    getPackagesByVenueId,
    updatePackageByPackageId,
} from "../../../api";
import {storage} from "../../../firebase";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {v4 as uuidv4} from "uuid";
//const { v4: uuidv4 } = require('uuid');

require("./PackageCreation.css");

export default function PackageCreation({
                                            setView,
                                            setPackages,
                                            selectedPackageVenue,
                                        }) {
    const [inputName, setInputName] = useState("");
    const [inputPackagePerPersonCost, setInputPackagePerPersonCost] = useState(0);
    const [inputDuration, setInputDuration] = useState(0);
    const [inputMaximumNumberOfPeople, setInputMaximumNumberOfPeople] =
        useState(0);
    const [inputPhotoUrl, setInputPhotoUrl] = useState("");
    const [inputOtherNotes, setInputOtherNotes] = useState("");
    const [inputDrinks, setInputDrinks] = useState("");
    const [inputFood, setInputFood] = useState("");
    const [inputDescription, setInputDescription] = useState("");

    const handlePackageDetailSaveButtonClick = async () => {
        console.log("PackageDetail.handlePackageDetailSaveButtonClick(): ");
        try {
            console.log("selectedPackageVenue.id: ", selectedPackageVenue.id);
            await createPackageByVenueId({
                venue_id: selectedPackageVenue.id,
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
                setView("Package");
            });
        } catch (e) {
            // todo: popup window to show error message
            console.error(e);
        }
    };

    const [inputImage, setInputImage] = useState("");

    const uploadImage = () => {
        if (!inputImage) return;
        const imageRef = ref(
            storage,
            `gs://tomokuru-auth.appspot.com/packages/${inputImage.name + uuidv4()}`
        );
        uploadBytes(imageRef, inputImage).then(async (snapshot) => {
            const url = await getDownloadURL(snapshot.ref);
            setInputPhotoUrl(url);
            console.log(`IMAGEURL IS : ${url}`);
            console.log(`Image successfully uploaded`);
        });
    };

    //   uploadImage = () => {
    //     const storage = getStorage()
    //     const reference = ref(storage, 'file_name.jpg')
    //     const file = e.target.files[0]

    //     uploadBytes(reference, file)
    //       .then(snapshot => {
    //         return getDownloadURL(snapshot.ref)
    //       })
    //       .then(downloadURL => {
    //         console.log('Download URL', downloadURL)
    //       })
    //   }

    return (
        <>
            <h1>
                Create Package for Venue:{" "}
                <span id={"package-title"}>{selectedPackageVenue.location_name}</span>
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
            {/* Picture URL */}
            <div className="mb-6">
                <label
                    htmlFor="venue-detail-input-name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Event Image
                </label>
                <input
                    type="file"
                    name="package-image"
                    id="venue-detail-input-name"
                    accept="image/png, image/jpeg"
                    onChange={(e) => {
                        setInputImage(e.target.files[0]);
                    }}
                />
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={uploadImage}
                >
                    Upload Image
                </button>
                {/* <input type="text"
                       id="venue-detail-input-name"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       value={inputPictureUrl}
                       onChange={(e) => setInputPictureUrl(e.target.value)}
                /> */}
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
        </>
    );
}
