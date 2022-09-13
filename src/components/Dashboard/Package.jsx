import PackageList from "./Package/PackageList";
import PackageDetail from "./Package/PackageDetail";

require('./Package.css');

export default function Package({setView, setPackages, packages, setSelectedPackage, selectedPackage}) {
    return (
        <>
            <div id="package-container">
                <div id="package-list">
                    <PackageList
                        setView={setView}
                        packages={packages}
                        setSelectedPackage={setSelectedPackage}
                    />
                </div>
                {selectedPackage ? (
                    <div id="package-detail">
                        <PackageDetail
                            setView={setView}
                            setPackages={setPackages}
                            packages={packages}
                            setSelectedPackage={setSelectedPackage}
                            selectedPackage={selectedPackage}
                        />
                    </div>
                ) : null}
            </div>
        </>
    )
}