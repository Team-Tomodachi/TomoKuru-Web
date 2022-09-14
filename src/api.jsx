import axios from 'axios';

// const API_HOST_URL = 'http://localhost:3001';
const API_HOST_URL = 'http://tomokuru.i-re.io';

const logRequest = (functionName, url, requestBody) => {
    if (process.env.NODE_ENV === 'development') {
        console.info('API: Calling:', functionName);
        console.info('API: URL:', url)
        console.info("API: Request Body:", requestBody);
    }
}

const logResponse = (functionName, response) => {
    if (process.env.NODE_ENV === 'development') {
        console.info('API: Response from:', functionName);
        console.info('API: Response:', response);
    }
}

const createUserWithFirebaseId = async (email, first_name, firebase_id) => {
    const requestBody = {
        'account_type': 'vendor',
        'email': email,
        'first_name': first_name,
        'firebase_id': firebase_id
    }
    const url = `${API_HOST_URL}/api/users`;
    logRequest(createUserWithFirebaseId.name, url, requestBody);
    let response = await axios.post(url, requestBody);
    logResponse(createUserWithFirebaseId.name, response);
    return response;
};

const getUserByEmail = async (email) => {
    const url = `${API_HOST_URL}/api/users/${email}`;
    logRequest(getUserByEmail.name, url, null);
    let response = await axios.get(url);
    logResponse(getUserByEmail.name, response);
    return response;
}

const updateUserByEmail = async (email, user) => {
    const requestBody = user;
    const url = `${API_HOST_URL}/api/users/${email}`;
    logRequest(updateUserByEmail.name, url, requestBody);
    let response = await axios.patch(url, requestBody);
    logResponse(updateUserByEmail.name, response);
    return response;
}

const getVenuesByUserId = async (userId) => {
    const url = `${API_HOST_URL}/api/venues/${userId}`;
    logRequest(getVenuesByUserId.name, url, null);
    let response = await axios.get(url)
    logResponse(getVenuesByUserId.name, response);
    return response;
}

const updateVenueById = async (id, venue) => {
    const requestBody = venue;
    const url = `${API_HOST_URL}/api/venues/${id}`;
    logRequest(updateVenueById.name, url, requestBody);
    let response = await axios.patch(url, requestBody);
    logResponse(updateVenueById.name, response);
    return response;
}

const deleteVenueById = async (id) => {
    const url = `${API_HOST_URL}/api/venues/${id}`;
    logRequest(deleteVenueById.name, url, null);
    let response = await axios.delete(url);
    logResponse(deleteVenueById.name, response);
    return response;
}

const createVenue = async (userId, venue) => {
    const requestBody = venue;
    const url = `${API_HOST_URL}/api/venues`;
    logRequest(createVenue.name, url, requestBody);
    let response = await axios.post(userId, venue);
    logResponse(createVenue.name, response);
    return response;
};

const getPackagesByUserId = async (userId) => {
    // // return await axios.get(`${API_HOST_URL}/api/packages/${userId}`)
    // return {
    //     "data": [
    //         {
    //             "package_name": "Oyster Festival",
    //             "package_per_person_cost": 10000,
    //             "duration(minutes)": 120,
    //             "maximum_number_of_people": 30,
    //             "picture_url": "https://dummyimage.com/100x60/000/fff",
    //             "other_notes": "no smoking area",
    //             "drinks": "tea & beers only",
    //             "food": "oyster unlimited",
    //             "description": ""
    //         },
    //         {
    //             "package_name": "Oyster Festival",
    //             "package_per_person_cost": 10000,
    //             "duration(minutes)": 120,
    //             "maximum_number_of_people": 30,
    //             "picture_url": "https://dummyimage.com/100x60/000/fff",
    //             "other_notes": "no smoking area",
    //             "drinks": "tea & beers only",
    //             "food": "oyster unlimited",
    //             "description": ""
    //         }
    //     ]
    // };
}

export {
    createUserWithFirebaseId,
    getUserByEmail,
    updateUserByEmail,
    getVenuesByUserId,
    updateVenueById,
    deleteVenueById,
    createVenue,
    getPackagesByUserId
}