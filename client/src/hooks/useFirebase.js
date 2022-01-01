import { useState, useEffect } from 'react';
import initializeFirebase from '../Firebase/firebase.init'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut ,
         updateProfile } from "firebase/auth";

initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [status, setStatus] =useState('')

    const auth = getAuth();

    const registerUser = (email, password , name , history , data) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password , name)
            .then((userCredential) => {
                setAuthError('');
                
                setUser({displayName:name,email})
                saveUser(email, name, 'POST' , data);


                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/')
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method , data) => {

        fetch(`${process.env.REACT_APP_BACKEND_URL}/users`, {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then()
    }

    return {
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logout,
        status, 
        setStatus,
        admin
    }
}

export default useFirebase
