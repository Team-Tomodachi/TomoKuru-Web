import React, {useEffect, useState} from 'react';
import VenueList from './Venue/VenueList';
import VenueDetail from './Venue/VenueDetail';

require('./Venue.css');

export default function Venue({setView, setVenues, venues, selectedVenue, setSelectedVenue, newVenue, setNewVenue}) {

    return (
        <>
            <div id="venue-container">
                <div id="venue-list">
                    <VenueList
                        venues={venues}
                        setSelectedVenue={setSelectedVenue}
                    />
                </div>
                <div id="venue-detail">
                    <VenueDetail
                        setView={setView}
                        setVenues={setVenues}
                        venues={venues}
                        setSelectedVenue={setSelectedVenue}
                        selectedVenue={selectedVenue}
                        newVenue={newVenue}
                        setNewVenue={setNewVenue}
                    />
                </div>
            </div>
        </>
    )
}