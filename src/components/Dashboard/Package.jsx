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
            <div id="package-container">

                {/* package venue list */}
                <div id="package-venue-list" className="flex overflow-x-auto space-x-5">
                    <PackageVenueList
                        venues={venues}
                        setSelectedPackageVenue={setSelectedPackageVenue}
                        setPackages={setPackages}
                    />
                </div>

                {selectedPackageVenue.id ? (
                    <div id="package-list" className="flex overflow-x-auto space-x-5">
                        <PackageList
                            packages={packages}
                            setSelectedPackage={setSelectedPackage}
                            setView={setView}
                        />
                    </div>
                ) : null}

                {selectedPackage.id ? (
                    <div id="package-detail">
                        PackageDetail: {selectedPackage.package_name}
                        <PackageDetail
                            selectedPackage={selectedPackage}
                            selectedPackageVenue={selectedPackageVenue}
                            setPackages={setPackages}
                        />
                    </div>
                ) : null}
            </div>
        </>
    )
}