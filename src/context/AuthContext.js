import {createContext, useContext, useEffect, useState} from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateCurrentUser,
    signOut,
} from 'firebase/auth';
import {auth} from '../firebase';

import {createUserWithFirebaseId, getUserByEmail} from '../api';

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [firebaseUser, setFirebaseUser] = useState(null);
    const [user, setUser] = useState(null);

    const createUser = (email, password, name) => {
        let result = createUserWithEmailAndPassword(auth, email, password);
        result.then(resp => {
            console.log('create user response from firebase: ', resp);
            createUserWithFirebaseId(email, name, resp.user.uid).then(resp => {
                console.log('createUserWithFirebaseId: ', resp);
                if (resp.status !== 200) {
                    throw new Error('Failed to create user on database!');
                }

                getUserByEmail(email).then(resp => {
                    console.log('getUserByEmail: ', resp);
                    if (resp.status !== 200) {
                        throw new Error('Failed to get user from database!');
                    }
                    let user = resp.data;
                    setUser(user);

                })
            });
        })
        return result;
    };

    const signIn = (email, password) => {
        let result = signInWithEmailAndPassword(auth, email, password);
        result.then(resp => {
            getUserByEmail(email).then(resp => {
                console.log('getUserByEmail: ', resp);
                if (resp.status !== 200) {
                    throw new Error('Failed to get user from database!');
                }
                let user = resp.data;
                setUser(user);

                console.log(user);
            })
        });
        return result;
    };

    const logout = () => {
        setUser(null);
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setFirebaseUser(currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <UserContext.Provider value={{user, createUser, logout, signIn}}>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(UserContext);
};