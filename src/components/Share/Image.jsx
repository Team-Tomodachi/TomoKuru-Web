import {useEffect, useState} from "react";
import {getFileUrl} from "../../utilities/firebase-storage";

require("./Image.css")

export function Image({reference, alt}) {
    const [imageUrl, setImageUrl] = useState("")

    useEffect(() => {
        setTimeout(function () {
            getFileUrl(reference).then(result => {
                console.log("###### result -> ", result);
                setImageUrl(result);
            })
        }, 2000);
    }, [reference])

    return imageUrl ?
        (
            <img
                src={imageUrl}
                alt={alt}
            />
        )
        :
        (
            <div className="flex justify-center">
                <div className="animate-spin h-6 w-6 border-4 border-blue-200 rounded-full border-t-transparent"></div>
            </div>
        )
}