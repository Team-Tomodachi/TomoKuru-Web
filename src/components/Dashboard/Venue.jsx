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
            <section id="venue-container">

                {/* venue list */}
                <section id="venue-list">
                    <VenueList
                        venues={venues}
                        setSelectedVenue={setSelectedVenue}
                        setView={setView}
                    />
                </section>

                {/* venue detail */}
                {selectedVenue.id ? (
                    <section id="venue-detail">
                        <VenueDetail
                            setView={setView}
                            setVenues={setVenues}
                            venues={venues}
                            setSelectedVenue={setSelectedVenue}
                            selectedVenue={selectedVenue}
                        />
                    </section>
                ) : null}
            </section>
        </>
    )
}