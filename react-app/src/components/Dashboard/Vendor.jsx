import React, {useEffect, useState} from 'react';

require('./Vendor.css');

export default function Vendor() {
    return (
        <>
            <div id={'vendor-container'}>
                <img id={'vendor-avatar'}
                     src={'https://picsum.photos/100'}
                     alt={"Vendor Avatar"}/>
                <h1>Vendor</h1>
            </div>
        </>
    )
}