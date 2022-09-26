import React, {useEffect, useState} from 'react';
import {UserAuth} from '../../context/AuthContext'
import {getUserByEmail, updateUserByEmail} from '../../api';
import {uploadFile} from "../../utilities/firebase-storage";
import {User, Bookmark, Map, MapPin} from 'react-feather';

require('./UserProfile.css');

export default function UserProfile() {
    const {user, updateUser} = UserAuth();

    // User
    const [inputName, setInputName] = useState(user.first_name);
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
        setInputName(inputName);
        setInputTitle(inputTitle);
        setInputCityWard(inputCityWard);
        setInputPrefecture(inputPrefecture);
    }, [inputName, inputTitle, inputCityWard, inputPrefecture]);

    const handleSaveButtonClick = async () => {
        try {
            // todo error handling
            uploadImage();

            const newUser = {
                first_name: inputName,
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
            <section id="user-profile-container">
                {/* Title */}
                <h1 id="user-profile-title">User Profile</h1>

                <hr/>

                {/* Image */}
                <section id="user-profile-image-container">
                    <img
                        id="user-profile-image"
                        src="https://dummyimage.com/600x800/aaaaaa/ffffff"
                        alt="Dummy Photo"
                    />
                </section>

                <hr/>

                {/* Image Upload */}
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                       htmlFor="user-profile-input-image-upload">
                    Upload Image
                </label>
                <input
                    className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="user-profile-input-image-upload"
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={(e) => {
                        setInputPhotoFile(e.target.files[0]);
                    }}
                />


                <div id={"user-profile"}>
                    {/* Name */}
                    <label htmlFor="user-profile-input-name"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Name
                    </label>
                    <div className="flex">
                    <span
                        className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <User/>
                    </span>
                        <input type="text"
                               id="user-profile-input-name"
                               className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder=""
                               value={inputName.toString()}
                               onChange={(e) => setInputName(e.target.value)}
                        />
                    </div>

                    {/* Title */}
                    <label htmlFor="user-profile-title-input"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Title
                    </label>
                    <div className="flex">
                        <span
                            className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <Bookmark/>
                        </span>
                        <input type="text"
                               id="user-profile-title-input"
                               className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder=""
                               value={inputTitle.toString()}
                               onChange={(e) => setInputTitle(e.target.value)}
                        />
                    </div>

                    {/* City/Ward */}
                    <label htmlFor="user-profile-input-city-ward"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        City/Ward
                    </label>
                    <div className="flex">
                        <span
                            className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <MapPin/>
                        </span>
                        <input type="text"
                               id="user-profile-input-city-ward"
                               className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder=""
                               value={inputCityWard.toString()}
                               onChange={(e) => setInputCityWard(e.target.value)}
                        />
                    </div>

                    {/* Prefecture */}
                    <label htmlFor="user-profile-input-prefecture"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Prefecture
                    </label>
                    <div className="flex">
                        <span
                            className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <Map/>
                        </span>
                        <input type="text"
                               id="user-profile-input-prefecture"
                               className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder=""
                               value={inputPrefecture.toString()}
                               onChange={(e) => setInputPrefecture(e.target.value)}
                        />
                    </div>

                    {/* Button */}
                    <section id="user-profile-button-container">
                        <button
                            id="user-profile-button-save"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded"
                            onClick={() => handleSaveButtonClick()}
                        >
                            Save
                        </button>

                    </section>
                </div>
            </section>
        </>
    )
}