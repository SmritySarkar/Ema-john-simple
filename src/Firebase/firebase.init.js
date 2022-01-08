import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}
 
export default initializeAuthentication;

/* 
Steps for Authentication 
----------------------------------
    Step-1 : Initial Setup 
    1. firebase: Create project 
    2. create web App
    3. get Configuration
    4. initialize firebase
    5. Enable Auth Method 
----------------------------------

    Step-2 : SetUp Component
    1. Create login Component
    2. Create Register Component
    3. Create Route for Login and Register
----------------------------------------------
    Step-3 : Set Auth System 
    1. Set up sign in method
    2. Set up Sign out Method
    3. Use state
    4. Special Observer(onAuthStateChange)
    5. return necessary methods and states from useFirebase
-----------------------------------------------

    Step-4 : Create Auth Context hook (useAuth)
    1. Create an Auth Context 
    2. Create Context Provider
    3. Set Context Providers Context value 
    4. Use Auth Provider 
    5. Create useAuth Hook
------------------------------------------------

    Step-5 : Create Private Route 
    1. Create Private Route
    2. Set Private Route 
-------------------------------------------------

    Step-6(Optional) : Redirect After Login
    1. After Login redirect user to their desired Location
*/