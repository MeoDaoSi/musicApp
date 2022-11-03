import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Typography } from "antd";
import { auth, db } from "../config/firebase.config";
import { GoogleAuthProvider , signInWithPopup, signInAnonymously, getAdditionalUserInfo  } from 'firebase/auth'
import { collection, doc, setDoc, addDoc, getDocs } from "firebase/firestore";
import { addDocument } from "../config/services";
import {FcGoogle} from 'react-icons/fc';
import {RiFacebookCircleFill} from 'react-icons/ri';

const {Title} = Typography;


export default function Login(){
    const handleFbLogin = () => {
        const fbProvider = new GoogleAuthProvider();
        signInWithPopup(auth,fbProvider)
        .then( (re) => {
            console.log(re);
            const details = getAdditionalUserInfo(re)
            console.log(details.isNewUser);
            if(details.isNewUser){
                addDocument('users', {
                    displayName: re.user.displayName,
                    email: re.user.email,
                    photoURL: re.user.photoURL,
                    uid: re.user.uid,
                    providerId: re.user.providerId
                })
                    .then(()=>{
                        console.log('success');
                    })
            }
            // getDocs(result)
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
        })
        .catch( (error)=>{
            console.log(error);
        })
    }

    return (
        <div className='relative w-screen h-screen'>
            <div className='absolute inset-0 bg-darkOverlay flex items-center justify-center p-4'>
                <div className='w-full md:w-375 p-4 bg-lightOverlay shadow-2xl rounded-md backdrop-blur-md flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center gap-2 px-6 py-2 rounded-md bg-cardOverlay cursor-pointer hover:bg-card hover:shadow-md duration-100 ease-in-out transition-all '
                    onClick={handleFbLogin}
                    >
                        <FcGoogle className='text-xl'/>
                        Sign in with Google
                    </div>
                    <div className='flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-cardOverlay cursor-pointer hover:bg-card hover:shadow-md duration-100 ease-in-out transition-all mt-1'
                    // onClick={handleFbLogin}
                    >
                        <RiFacebookCircleFill className='text-xl'/>
                        Sign in with Facebook
                    </div>
                </div>
            </div>
        </div>
    )
}