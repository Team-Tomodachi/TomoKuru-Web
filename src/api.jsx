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

const createVenue = async (venue) => {
    const requestBody = venue;
    const url = `${API_HOST_URL}/api/venues`;
    logRequest(createVenue.name, url, requestBody);
    let response = await axios.post(url, requestBody);
    logResponse(createVenue.name, response);
    return response;
};

// Venue Package
const getPackagesByVenueId = async (packageId) => {
    const url = `${API_HOST_URL}/api/venues/packages/${packageId}`;
    logRequest(getPackagesByVenueId.name, url, null);
    let response = await axios.get(url);
    logResponse(getPackagesByVenueId.name, response);
    return response;
}

const updatePackageByPackageId = async (packageId, packageObject) => {
    const requestBody = packageObject;
    const url = `${API_HOST_URL}/api/venues/packages/${packageId}`;
    logRequest(updateEventByEventId.name, url, requestBody);
    let response = await axios.patch(url, requestBody);
    logResponse(updateEventByEventId.name, response);
    return response;
}

const deletePackageByPackageId = async (packageId) => {
    const url = `${API_HOST_URL}/api/venues/packages/${packageId}`;
    logRequest(deletePackageByPackageId.name, url, null);
    let response = await axios.delete(url);
    logResponse(deletePackageByPackageId.name, response);
    return response;
}

const createPackageByVenueId = async (packageObject) => {
    const requestBody = packageObject;
    const url = `${API_HOST_URL}/api/venues/package`;
    logRequest(createPackageByVenueId.name, url, requestBody);
    let response = await axios.post(url, requestBody);
    logResponse(createPackageByVenueId.name, response);
    return response;
}

// Event
const getEventsByVenueId = async (venueId) => {
    const url = `${API_HOST_URL}/api/events/venue/${venueId}`;
    logRequest(getEventsByVenueId.name, url, null);
    let response = await axios.get(url);
    logResponse(getEventsByVenueId.name, response);
    return response;
}

const updateEventByEventId = async (eventId, event) => {
    const requestBody = event;
    const url = `${API_HOST_URL}/api/events/${eventId}`;
    logRequest(updateEventByEventId.name, url, requestBody);
    let response = await axios.patch(url, requestBody);
    logResponse(updateEventByEventId.name, response);
    return response;
}

const deleteEventByEventId = async (eventId) => {
    const url = `${API_HOST_URL}/api/events/${eventId}`;
    logRequest(deleteEventByEventId.name, url, null);
    let response = await axios.delete(url);
    logResponse(deleteEventByEventId.name, response);
    return response;
}

const createEventByVenueId = async (event) => {
    const requestBody = event;
    const url = `${API_HOST_URL}/api/events`;
    logRequest(createEventByVenueId.name, url, requestBody);
    let response = await axios.post(url, requestBody);
    logResponse(createEventByVenueId.name, response);
    return response;
}

// Events without venue
const getEventsWithoutVenue = async () => {
    const url = `${API_HOST_URL}/api/events/noVenues`;
    logRequest(getEventsWithoutVenue.name, url, null);
    let response = await axios.get(url);
    logResponse(getEventsWithoutVenue.name, response);
    return response;
}

// Upcoming Events & Hosted Events
const getEvents = async () => {
    const url = `${API_HOST_URL}/api/events`;
    logRequest(getEvents.name, url, null);
    let response = await axios.get(url);
    logResponse(getEvents.name, response);
    return response;
}

export {
    createUserWithFirebaseId,
    getUserByEmail,
    updateUserByEmail,
    getVenuesByUserId,
    updateVenueById,
    deleteVenueById,
    createVenue,
    // Venue Package
    getPackagesByVenueId,
    updatePackageByPackageId,
    deletePackageByPackageId,
    createPackageByVenueId,
    // Event
    getEventsByVenueId,
    updateEventByEventId,
    deleteEventByEventId,
    createEventByVenueId,
    // Events without venue
    getEventsWithoutVenue,
    // Upcoming Events & Hosted Events
    getEvents
}