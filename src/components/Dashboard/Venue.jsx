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
            {/* venue container */}
            <div id="venue-container">
                {/* venue list */}
                <div id="venue-list" className="flex overflow-x-auto space-x-5">
                    <VenueList
                        venues={venues}
                        setSelectedVenue={setSelectedVenue}
                    />
                </div>

                {/* venue detail */}
                {selectedVenue.id ? (
                    <div id="venue-detail">
                        <VenueDetail
                            setView={setView}
                            setVenues={setVenues}
                            venues={venues}
                            setSelectedVenue={setSelectedVenue}
                            selectedVenue={selectedVenue}
                        />
                    </div>
                ) : null}
            </div>
        </>
    )
}