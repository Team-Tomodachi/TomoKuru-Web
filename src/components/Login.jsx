import React, {useEffect, useState} from 'react';
import {UserAuth} from '../context/AuthContext'

require('./Login.css');

export default function Login({setShowLoginModal}) {
    const {signIn} = UserAuth();

    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setInputPassword] = useState("")

    const handleLoginButtonClick = async () => {
        setShowLoginModal(false);
        try {
            let result = await signIn(inputEmail, inputPassword)
            console.log('Login', result);
        } catch (e) {
            // todo: popup window to show error message
            console.error(e);
        }
    }

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div
                        className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div
                            className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Welcome to TomoKuru
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowLoginModal(false)}
                            >
                    <span
                        className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <div className="mb-6">
                                <label htmlFor="input-email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Email
                                </label>
                                <input type="text" id="input-email"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       onChange={(e) => setInputEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="input-password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Password
                                </label>
                                <input type="password" id="input-password"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       onChange={(e) => setInputPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        {/*footer*/}
                        <div
                            className="">
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => handleLoginButtonClick()}
                            >
                                Log in
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}