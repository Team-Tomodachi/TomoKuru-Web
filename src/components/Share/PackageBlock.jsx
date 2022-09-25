import {Image} from "./Image";

require("./Image.css")
require('./PackageBlock.css');

export function PackageBlock({packageObj, setSelectedPackage}) {
    return (
        <>
            {/* container */}
            <div className="package-block-container"
                 key={packageObj.id}
                 onClick={() => {
                     setSelectedPackage(packageObj);
                 }}
            >

                {/* image */}
                <div className={'package-block-image'}>
                    <Image reference={packageObj.photo_url} alt={packageObj.package_name}/>
                </div>

                {/* content */}
                <div className="package-block-content">
                    {/* name */}
                    <div className="package-block-content-name">{packageObj.package_name}</div>
                </div>

            </div>
        </>
    )
}