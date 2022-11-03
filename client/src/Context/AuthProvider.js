import React, { useState, useEffect } from 'react'
import { auth } from "../config/firebase.config";
import { useNavigate } from 'react-router-dom';
import { Spin } from 'antd';

export const AuthContext = React.createContext();

export default function AuthProvider( {children} ) {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect( ()=> {
        auth.onAuthStateChanged( (user) => {
            console.log({user});
            if (user) {
                const { displayName, email, uid, photoURL } = user;
                setUser({
                    displayName, email, uid, photoURL
                });
                setIsLoading(false);
                navigate('/');
            }
            else{
                navigate('/login');
                setIsLoading(false);
            }
        });
    }, [])


    return (
        <AuthContext.Provider value={{ user }} >
            { isLoading ? <Spin /> : children }
        </AuthContext.Provider>
    )
}
