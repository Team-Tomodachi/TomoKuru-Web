import React, {useEffect, useState} from 'react';
import {UserAuth} from '../../context/AuthContext'
import {updateUserByEmail} from '../../api';

require('./UserProfile.css');

export default function UserProfile() {
    const {user} = UserAuth();
    const [newUser, setNewUser] = useState(user);

    const [inputName, setInputName] = useState(newUser.first_name);
    const [inputTitle, setInputTitle] = useState(newUser.title);
    const [inputCityWard, setInputCityWard] = useState(newUser.city_ward);
    const [inputPrefecture, setInputPrefecture] = useState(newUser.prefecture);

    useEffect(() => {
        setNewUser({
            first_name: inputName,
            title: inputTitle,
            city_ward: inputCityWard,
            prefecture: inputPrefecture,
        })
        console.log(newUser);
    }, [inputName, inputTitle, inputCityWard, inputPrefecture]);

    const handleSaveButtonClick = async () => {
        try {
            console.log("##########");
            console.log(inputName);
            console.log(inputTitle);
            console.log(inputCityWard);
            console.log(inputPrefecture);
            console.log("##########");
            let result = await updateUserByEmail(user.email, newUser);
            console.log('updateUserByEmail: ', result);
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
                           value={newUser.first_name}
                           onChange={(e) => setInputName(e.target.value)}
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
                           value={newUser.title}
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
                           value={newUser.city_ward}
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
                           value={newUser.prefecture}
                           onChange={(e) => setInputPrefecture(e.target.value)}
                    />
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