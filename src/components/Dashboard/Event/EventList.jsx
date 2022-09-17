require('./EventList.css');

export default function EventList({setView, events, setSelectedEvent}) {

    return (
        <>
            <h1>Event List</h1>
            <div>
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => setView("EventCreation")}
                >
                    Create
                </button>
            </div>
            {
                events.map((item, index) => {
                    return (
                        <div key={index}>
                            <div
                                className={'event-list-block'}
                                onClick={() => {
                                    setSelectedEvent(item);
                                    console.log(" EventList -> onClick -> item: ", item);
                                }}
                            >
                                <div
                                    className={'event-list-block-image'}
                                >
                                    <img src="https://picsum.photos/200/100" alt="Package Photo"/>
                                </div>
                                <div
                                    className={'event-list-block-content'}
                                >
                                    <div className={'event-list-block-content-name'}>{item.name}</div>
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
