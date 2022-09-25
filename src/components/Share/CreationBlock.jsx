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

                {/* image */}
                <div className={'creation-block-image'}>
                    <img
                        src={"https://dummyimage.com/180x120/aaaaaa/ffffff.png&text=Create"}/>
                </div>

            </div>
        </>
    )
}