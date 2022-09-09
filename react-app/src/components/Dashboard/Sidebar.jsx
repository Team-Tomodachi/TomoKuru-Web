import React, {useEffect, useState} from 'react';
import Vendor from "./Vendor";
import {getVenues} from "../../api";

require('./Sidebar.css');

export default function Sidebar({setView, setVenues}) {

    const handleVenueButtonClick = () => {
        setView("Venue");
        getVenues().then(resp => {
            setVenues(resp.data);
            console.log("getVenues: ", resp.data);
        });
    }

    return (<>
        <div id={'sidebar-container'}>
            <div id={'sidebar-vendor'}>
                <Vendor setView={setView}/>
            </div>
            <div id={'sidebar-features'}>
                <button
                    id={'sidebar-features-venue-button'}
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => handleVenueButtonClick()}
                >
                    Venue
                </button>
                <button
                    id={'sidebar-features-package-button'}
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => setView("Package")}
                >
                    Package
                </button>
                <button
                    id={'sidebar-features-event-button'}
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => setView("Event")}
                >
                    Event
                </button>
                <button
                    id={'sidebar-features-search-button'}
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => setView("Search")}
                >
                    Search
                </button>
            </div>
        </div>
    </>)
}