import React from 'react';
import VenueList from './Venue/VenueList';
import VenueDetail from './Venue/VenueDetail';

require('./Venue.css');

export default function Venue({
                                  setView,
                                  setVenues,
                                  venues,
                                  selectedVenue,
                                  setSelectedVenue,
                              }) {
    return (
        <>
            <div id="venue-container">
                <div id="venue-list">
                    <VenueList
                        venues={venues}
                        setSelectedVenue={setSelectedVenue}
                        setView={setView}
                    />
                </div>
                {selectedVenue ? (
                    <>
                        <div id="venue-detail">
                            <VenueDetail
                                setView={setView}
                                setVenues={setVenues}
                                venues={venues}
                                setSelectedVenue={setSelectedVenue}
                                selectedVenue={selectedVenue}
                            />
                        </div>
                    </>
                ) : null}
            </div>
        </>
    )
}