require('./PackageList.css');

export default function PackageList({packages, setSelectedPackages, setView}) {
    return (
        <>
            <div>Package List</div>
            <div>
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => setView("PackageCreation")}
                >
                    Create
                </button>
            </div>
            {
                packages.map((item, index) => {
                    return (
                        <div key={index}>
                            <div
                                className={'package-list-block'}
                                onClick={() => {
                                    setSelectedPackages(item);
                                    console.log(" PackageList -> onClick -> item: ", item);
                                }}
                            >
                                <div
                                    className={'package-list-block-image'}
                                >
                                    <img src="https://picsum.photos/200/100" alt="Package Photo"/>
                                </div>
                                <div
                                    className={'package-list-block-content'}
                                >
                                    <div className={'package-list-block-content-name'}>{item.package_name}</div>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    )
                })
            }
        </>
    )
}
