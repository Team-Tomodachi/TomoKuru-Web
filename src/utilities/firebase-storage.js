import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";
import {storage} from "../firebase";
import {v4 as uuid_v4} from "uuid";

const URL = "gs://tomokuru-auth.appspot.com";

const uploadFile = async (filePath, remoteFolder) => {
    if (!filePath) throw new Error("Need to specify file path.");
    if (!remoteFolder) throw new Error("Need to specify remote folder name.");

    const fileRef = ref(
        storage,
        `${URL}/${remoteFolder}/${uuid_v4()}`
    );

    return uploadBytes(fileRef, filePath);
};

const getFileUrl = async (reference) => {
    if(!reference) {
        return "https://dummyimage.com/100x60/ffffff/222222.png&text=No+Picture";
    }
    const storageRef = ref(getStorage(), reference);
    return getDownloadURL(storageRef)
}

export {
    uploadFile,
    getFileUrl
}