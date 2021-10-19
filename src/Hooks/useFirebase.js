import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";


initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [email, setEmail] = useState({});
    const [password, setPassword] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    const handleRegistration = (e) => {
      console.log(email, password);
      createUserWithEmailAndPassword(auth, email, password).then((result) => {
        const user = result.user;
        console.log(user);
      });
      e.preventDefault();
    };

    const LoginProcess = (e) => {
      signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      });
      e.preventDefault();
    };

    const signInUsingGoolgle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user)
        })
        .finally(() => setIsLoading(false));
    }
    
    //observe user state change
    useEffect(() =>{
        const unsubscribed = onAuthStateChanged(auth, user =>{
            
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }

            setIsLoading(false)
        });

        return () => unsubscribed;
    }, []);

    const logOut = () => {
        setIsLoading(true)
      signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
    };

    return {
      user,
      isLoading,
      signInUsingGoolgle,
      logOut,
      handleEmailChange,
      handlePasswordChange,
      handleRegistration,
      LoginProcess,
    };
}

export default useFirebase;