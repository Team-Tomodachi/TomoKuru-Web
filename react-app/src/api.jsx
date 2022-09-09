import axios from 'axios';

const API_HOST_URL = 'http://tomokuru.i-re.io';
// const API_HOST_URL = 'http://localhost:3001';

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

export {
    createUserWithFirebaseId,
    getUserByEmail,
}
