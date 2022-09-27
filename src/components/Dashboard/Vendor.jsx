import React, {useState, useEffect} from "react";
import {UserAuth} from "../../context/AuthContext"
import {getFileUrl} from "../../utilities/firebase-storage";
import {MapPin} from 'react-feather';

require("./Vendor.css");

export default function Vendor({setView}) {
    const {user} = UserAuth();

    const [inputName, setInputName] = useState(user.first_name);
    const [inputTitle, setInputTitle] = useState(user.title);
    const [inputCityWard, setInputCityWard] = useState(user.city_ward);
    const [inputPrefecture, setInputPrefecture] = useState(user.prefecture);

    // Photo
    const [photoDownloadUrl, setPhotoDownloadUrl] = useState("");

    useEffect(() => {
        setInputName(user.first_name);
        setInputTitle(user.title);
        setInputCityWard(user.city_ward);
        setInputPrefecture(user.prefecture);
        if (user.photo_url) {
            getFileUrl(user.photo_url).then((result) => {
                setPhotoDownloadUrl(result);
            });
        } else {
            setPhotoDownloadUrl(null);
        }
    }, [user]);


    return (
        <>
            <section id={"vendor-container"}>
                {
                    photoDownloadUrl ? (
                        <img id={"vendor-avatar"}
                             src={photoDownloadUrl}
                             alt={inputName}
                             onClick={() => setView("UserProfile")}
                        />
                    ) : (
                        <img
                            id="vendor-avatar"
                            src="https://dummyimage.com/150x150/ffffff/cccccc.png&text=No+picture"
                            alt="No picture"
                            onClick={() => setView("UserProfile")}
                        />
                    )
                }
                <div id="vendor-name">{inputName}</div>
                <div id="vendor-title">{inputTitle}</div>
                <section id="vendor-location-container">
                    {inputCityWard || inputPrefecture ? (<MapPin/>) : null}
                    <span>{inputCityWard}</span>
                    {inputCityWard && inputPrefecture ? (<span>, </span>) : null}
                    <span>{inputPrefecture}</span>
                </section>
            </section>
        </>
    )
}