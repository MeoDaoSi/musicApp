import {db} from './firebase.config';
import { collection, doc, setDoc, addDoc, getDocs, serverTimestamp } from "firebase/firestore";

export const addDocument = (collec, data) => {
    const result = collection(db,collec);
    addDoc(result,{
        ...data,
        createAt: serverTimestamp()
    })
}