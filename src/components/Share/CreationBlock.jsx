require("./Image.css")
require('./CreationBlock.css');

export function CreationBlock({setView, view}) {

    return (
        <>
            {/* container */}
            <div className="creation-block-container"
                 onClick={() => {
                     setView(view);
                 }}
            >

                <button
                    className="creation-block-button-create"
                >
                    Create
                </button>

            </div>
        </>
    )
}