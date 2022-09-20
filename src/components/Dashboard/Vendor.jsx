import React, {useEffect, useState} from 'react';
import {UserAuth} from '../../context/AuthContext'

require('./Vendor.css');

export default function Vendor({setView}) {
    const {user} = UserAuth();
    return (
        <>
            <div id={'vendor-container'}>
                <img id={'vendor-avatar'}
                     src={'https://picsum.photos/100'}
                     alt={"Vendor Avatar"}
                     onClick={() => setView("UserProfile")}
                />
                <h1>{user.first_name}</h1>
                <h1>{user.title}</h1>
                <h1>City: {user.city_ward}</h1>
                <h1>Prefecture: {user.prefecture}</h1>
            </div>
        </>
    )
}