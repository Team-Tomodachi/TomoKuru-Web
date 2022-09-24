import {PackageBlock} from "../../Share/PackageBlock";

require('./PackageList.css');

export default function PackageList({
                                        packages,
                                        setSelectedPackage
                                    }) {

    return (
        <>
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
