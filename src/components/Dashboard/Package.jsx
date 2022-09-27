import React from "react";
import PackageVenueList from "./Package/PackageVenueList";
import PackageList from "./Package/PackageList";
import PackageDetail from "./Package/PackageDetail";

require('./Package.css');

export default function Package({
                                    setView,
                                    venues,
                                    setSelectedPackageVenue,
                                    selectedPackageVenue,
                                    setPackages,
                                    packages,
                                    setSelectedPackage,
                                    selectedPackage
                                }) {
    return (
        <>
            {/* package container */}
            <section id="package-container">

                {/* package venue list */}
                <div id="package-venue-list">
                    <PackageVenueList
                        venues={venues}
                        setSelectedPackageVenue={setSelectedPackageVenue}
                        setPackages={setPackages}
                    />
                </div>

                {selectedPackageVenue.id ? (
                    <div id="package-list">
                        <PackageList
                            packages={packages}
                            setSelectedPackage={setSelectedPackage}
                            setView={setView}
                        />
                    </div>
                ) : null}

                {selectedPackage.id ? (
                    <div id="package-detail">
                        <PackageDetail
                            setView={setView}
                            setPackages={setPackages}
                            packages={packages}
                            selectedPackage={selectedPackage}
                            selectedPackageVenue={selectedPackageVenue}
                        />
                    </div>
                ) : null}
            </section>
        </>
    )
}