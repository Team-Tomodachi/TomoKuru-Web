import React, {useState, useEffect} from "react";
import {UserAuth} from "../../context/AuthContext"
import {getFileUrl} from "../../utilities/firebase-storage";

require("./Vendor.css");

export default function Vendor({setView}) {
    const {user} = UserAuth();

    const [inputFirstName, setInputFirstName] = useState(user.first_name);
    const [inputTitle, setInputTitle] = useState(user.title);
    const [inputCityWard, setInputCityWard] = useState(user.city_ward);
    const [inputPrefecture, setInputPrefecture] = useState(user.prefecture);

    // Photo
    const [photoDownloadUrl, setPhotoDownloadUrl] = useState("");

    useEffect(() => {
        setInputFirstName(user.first_name);
        setInputTitle(user.title);
        setInputCityWard(user.city_ward);
        setInputPrefecture(user.prefecture);
        getFileUrl(user.photo_url).then((result) => {
            setPhotoDownloadUrl(result);
        });
    }, [user]);


    return (
        <>
            <div id={"vendor-container"}>
                {photoDownloadUrl ? (
                    <img id={"vendor-avatar"}
                         src={photoDownloadUrl}
                         alt={inputFirstName}
                         onClick={() => setView("UserProfile")}
                    />
                ) : (
                    <img id={"vendor-avatar"}
                         src={"https://picsum.photos/seed/picsum/180/120"}
                         alt={inputFirstName}
                         onClick={() => setView("UserProfile")}
                    />
                )}
                <h1>{inputFirstName}</h1>
                <h1>{inputTitle}</h1>
                <h1>City: {inputCityWard}</h1>
                <h1>Prefecture: {inputPrefecture}</h1>
            </div>
        </>
    )
}