import {PackageBlock} from "../../Share/PackageBlock";
import {CreationBlock} from "../../Share/CreationBlock";

require('./PackageList.css');

export default function PackageList({
                                        packages,
                                        setSelectedPackage,
                                        setView
                                    }) {

    return (
        <>
            {/* Package Creation Button */}
            <CreationBlock
                setView={setView}
                view={"PackageCreation"}
            />

            {/* package list */}
            {packages.map((item) => {
                return (
                    <PackageBlock
                        packageObj={item}
                        setSelectedPackage={setSelectedPackage}
                    />
                )
            })}
        </>
    )
}
