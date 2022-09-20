import Vendor from "./Vendor";
import {getVenuesByUserId, getEventsWithoutVenue, getEvents} from "../../api";
import {UserAuth} from '../../context/AuthContext'

require('./Sidebar.css');

export default function Sidebar({setView, setVenues, setEventsWithoutVenue, setUpcomingEvents, setHostedEvents}) {

    const {user} = UserAuth();

    // Venue
    const handleVenueButtonClick = () => {
        console.log("Sidebar.handleVenueButtonClick()");
        setView("Venue");
        getVenuesByUserId(user.id).then(resp => {
            setVenues(resp.data);
        });
    }

    // Package
    const handlePackageButtonClick = () => {
        console.log("Sidebar.handlePackageButtonClick()");
        setView("Package");
        getVenuesByUserId(user.id).then(resp => {
            setVenues(resp.data);
        });
    }

    // Event
    const handleEventButtonClick = () => {
        console.log("Sidebar.handleEventButtonClick()");
        setView("Event");
        getVenuesByUserId(user.id).then(resp => {
            setVenues(resp.data);
        });
    }

    // Events without venue
    const handleEventsWithoutVenueButtonClick = () => {
        console.log("Sidebar.handleEventWithoutVenueButtonClick()");
        setView("EventsWithoutVenue");
        getEventsWithoutVenue().then(resp => {
            setEventsWithoutVenue(resp.data);
        });
    }

    // Upcoming Events
    const handleUpcomingEventsButtonClick = () => {
        console.log("Sidebar.handleUpcomingEventsButtonClick()");
        setView("UpcomingEvents");
        getEvents(user.id).then(resp => {
            // upcoming events only
            const result = resp.data.filter(el => Date.parse(el.end_time) > Date.now())
            setUpcomingEvents(result);
        });
    }

    // Hosted Events
    const handleHostedEventsButtonClick = () => {
        console.log("Sidebar.handleHostedEventsButtonClick()");
        setView("HostedEvents");
        getEvents(user.id).then(resp => {
            // hosted events only
            const result = resp.data.filter(el => Date.parse(el.end_time) <= Date.now())
            setHostedEvents(result);
        });
    }

    return (<>
        <div id={'sidebar-container'}>
            <div id={'sidebar-vendor'}>
                <Vendor setView={setView}/>
            </div>
            <div id={'sidebar-features'}>
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => handleVenueButtonClick()}
                >
                    Venue
                </button>
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => handlePackageButtonClick()}
                >
                    Package
                </button>
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => handleEventButtonClick()}
                >
                    Event
                </button>
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => handleEventsWithoutVenueButtonClick()}
                >
                    Events without venue
                </button>
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => handleUpcomingEventsButtonClick()}
                >
                    Upcoming Events
                </button>
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => handleHostedEventsButtonClick()}
                >
                    Hosted Events
                </button>
                {/*<button*/}
                {/*    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"*/}
                {/*    onClick={() => setView("Search")}*/}
                {/*>*/}
                {/*    Search*/}
                {/*</button>*/}
            </div>
        </div>
    </>)
}