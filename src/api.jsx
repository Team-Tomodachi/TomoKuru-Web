import axios from 'axios';

// const API_HOST_URL = 'http://localhost:3001';
const API_HOST_URL = 'http://tomokuru.i-re.io';

const createUserWithFirebaseId = async (email, first_name, firebase_id) => {
    return await axios.post(`${API_HOST_URL}/api/users`, {
        'account_type': 'vendor',
        'email': email,
        'first_name': first_name,
        'firebase_id': firebase_id
    });
};

const getUserByEmail = async (email) => {
    try {
        return await axios.get(`${API_HOST_URL}/api/users/${email}`)
    } catch (err) {
        return err.response;
    }
}

const updateUserByEmail = async (email, user) => {
    try {
        return await axios.patch(`${API_HOST_URL}/api/users/${email}`, user);
    } catch (err) {
        return err.response;
    }
}

const getVenuesByUserId = async (userId) => {
    try {
        return await axios.get(`${API_HOST_URL}/api/venues/${userId}`)
    } catch (err) {
        return err.response;
    }
}

const updateVenueById = async (id, venue) => {
    try {
        return await axios.patch(`${API_HOST_URL}/api/venues/${id}`, venue);
    } catch (err) {
        return err.response;
    }
}

const deleteVenueById = async (id) => {
    try {
        return await axios.delete(`${API_HOST_URL}/api/venues/${id}`);
    } catch (err) {
        return err.response;
    }
}

const createVenue = async (venue) => {
    return await axios.post(`${API_HOST_URL}/api/venues`, venue);
};

const getPackagesByUserId = async (userId) => {
    try {
        // return await axios.get(`${API_HOST_URL}/api/packages/${userId}`)
        return {
            "data": [
                {
                    "package_name": "Oyster Festival",
                    "package_per_person_cost": 10000,
                    "duration(minutes)": 120,
                    "maximum_number_of_people": 30,
                    "picture_url": "https://dummyimage.com/100x60/000/fff",
                    "other_notes": "no smoking area",
                    "drinks": "tea & beers only",
                    "food": "oyster unlimited",
                    "description": ""
                },
                {
                    "package_name": "Oyster Festival",
                    "package_per_person_cost": 10000,
                    "duration(minutes)": 120,
                    "maximum_number_of_people": 30,
                    "picture_url": "https://dummyimage.com/100x60/000/fff",
                    "other_notes": "no smoking area",
                    "drinks": "tea & beers only",
                    "food": "oyster unlimited",
                    "description": ""
                }
            ]
        };
    } catch
        (err) {
        return err.response;
    }
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