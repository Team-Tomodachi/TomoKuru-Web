import PackageVenueList from "./Package/PackageVenueList";
import PackageList from "./Package/PackageList";
import PackageDetail from "./Package/PackageDetail";
import React from "react";

require('./Package.css');

export default function Package({
                                    setView,
                                    venues,
                                    setSelectedVenue,
                                    setPackages,
                                    packages,
                                    setSelectedPackage,
                                    selectedPackage,
                                    setSelectedPackageVenue,
                                    selectedPackageVenue
                                }) {
    return (
        <>
            <div id="package-container">
                <div id="package-venue-list">
                    <PackageVenueList
                        venues={venues}
                        setView={setView}
                        setSelectedPackageVenue={setSelectedPackageVenue}
                        setPackages={setPackages}
                    />
                </div>
                {selectedPackageVenue ? (
                    <div id="package-list">
                        <PackageList
                            setView={setView}
                            setSelectedPackageVenue={setSelectedPackageVenue}
                            packages={packages}
                            setSelectedPackage={setSelectedPackage}
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