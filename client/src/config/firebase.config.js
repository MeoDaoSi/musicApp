
import {getApp, getApps, initializeApp} from 'firebase/app'
import {getStorage} from 'firebase/storage'

const firebaseConfig = { 
    apiKey : "AIzaSyBMiz-wgPw5F59E1_KR4-IptMXnHMhFxPg", 
    authDomain : "projectmusicapp-ab013.firebaseapp.com", 
    projectId : "projectmusicapp-ab013", 
    storageBucket : "projectmusicapp-ab013.appspot.com", 
    messagingSenderId : "287330540385", 
    appId : "1:287330540385:web:643da1149d09e7e8b28320" 
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);

export {app, storage};