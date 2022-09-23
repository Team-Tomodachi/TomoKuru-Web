import {useEffect, useState} from "react";
import {getFileUrl} from "../../utilities/firebase-storage";

require("./Image.css")

export function Image({reference, alt}) {
    const [imageUrl, setImageUrl] = useState("")

    useEffect(() => {
        // todo: remove setTimeout
        setTimeout(function () {
            getFileUrl(reference).then(result => {
                setImageUrl(result);
            })
        }, 100);
    }, [reference])

    return imageUrl ?
        (
            <img
                className={"image"}
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