import React, { useState, useEffect } from 'react'
import { auth } from "../config/firebase.config";
import { useNavigate } from 'react-router-dom';
import { Spin } from 'antd';
import { collection, doc, setDoc, addDoc, getDocs } from "firebase/firestore";

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
                if ( email === 'levantinh1230@gmail.com'){
                    setUser({
                        displayName, email, uid, photoURL, role: 'admin'
                    });
                }else{
                    setUser({
                        displayName, email, uid, photoURL, role: 'member'
                    });
                }
                setIsLoading(false);
                navigate('/');
            }
            else{
                navigate('/login');
                setIsLoading(false);
            }
            // getDocs(user)
            //     .then((snapshot) => {
            //         let user = [];
                    
            //         snapshot.docs.forEach(doc => {
            //             user.push({...doc.data(),id: doc.id})
            //         })
            //         console.log(user);
            //     })
            //     .catch(error => {
            //         console.log(error);
            //     })
        });
    }, [])


    return (
        <AuthContext.Provider value={{ user }} >
            { isLoading ? <Spin /> : children }
        </AuthContext.Provider>
    )
}
