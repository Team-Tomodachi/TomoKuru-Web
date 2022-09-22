import React, {useEffect, useState} from 'react';
import {UserAuth} from '../../context/AuthContext'
import {getUserByEmail, updateUserByEmail} from '../../api';
import {uploadFile} from "../../utilities/firebase-storage";

require('./UserProfile.css');

export default function UserProfile() {
    const {user, updateUser} = UserAuth();

    // User
    const [inputFirstName, setInputFirstName] = useState(user.first_name);
    const [inputTitle, setInputTitle] = useState(user.title);
    const [inputCityWard, setInputCityWard] = useState(user.city_ward);
    const [inputPrefecture, setInputPrefecture] = useState(user.prefecture);

    // Photo
    const [inputPhotoFile, setInputPhotoFile] = useState("");
    const [photoReference, setPhotoReference] = useState("");

    const uploadImage = () => {
        if (!inputPhotoFile) return;
        uploadFile(inputPhotoFile, "users").then(result => {
            const reference = result.ref.fullPath;
            setPhotoReference(reference);
        });
    };

    useEffect(() => {
        setInputFirstName(inputFirstName);
        setInputTitle(inputTitle);
        setInputCityWard(inputCityWard);
        setInputPrefecture(inputPrefecture);
    }, [inputFirstName, inputTitle, inputCityWard, inputPrefecture]);

    const handleSaveButtonClick = async () => {
        try {
            const newUser = {
                first_name: inputFirstName,
                title: inputTitle,
                city_ward: inputCityWard,
                prefecture: inputPrefecture,
                photo_url: photoReference
            };
            await updateUserByEmail(user.email, newUser);
            getUserByEmail(user.email).then(resp => {
                if (resp.status !== 200) {
                    throw new Error('Failed to get user from database!');
                }
                updateUser(resp.data);
            })

        } catch (e) {
            // todo: popup window to show error message
            console.error(e);
        }
    }

    return (
        <>
            <h1>User Profile</h1>
            <div id={"user-profile"}>
                {/* Name */}
                <div>
                    <label htmlFor="user-profile-name-input"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Name
                    </label>
                    <input type="text" id="user-profile-name-input"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           value={inputFirstName.toString()}
                           onChange={(e) => setInputFirstName(e.target.value)}
                    />
                </div>
                {/* Title */}
                <div>
                    <label htmlFor="user-profile-title-input"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Title
                    </label>
                    <input type="text" id="user-profile-title-input"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           value={inputTitle.toString()}
                           onChange={(e) => setInputTitle(e.target.value)}
                    />
                </div>
                {/* City/Ward */}
                <div>
                    <label htmlFor="user-profile-city-ward-input"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        City/Ward
                    </label>
                    <input type="text" id="user-profile-city-ward-input"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           value={inputCityWard.toString()}
                           onChange={(e) => setInputCityWard(e.target.value)}
                    />
                </div>
                {/* Prefecture */}
                <div>
                    <label htmlFor="user-profile-prefecture-input"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Prefecture
                    </label>
                    <input type="text" id="user-profile-prefecture-input"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           value={inputPrefecture.toString()}
                           onChange={(e) => setInputPrefecture(e.target.value)}
                    />
                </div>

                {/* Photo URL */}
                <div className="mb-6">
                    <label
                        htmlFor="venue-detail-input-photo-url"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Event Image
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

                {/* Button */}
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleSaveButtonClick()}
                >
                    Save
                </button>
            </div>
        </>
    )
}