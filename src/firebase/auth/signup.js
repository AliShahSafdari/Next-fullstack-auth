import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);


export default async function signUp(email, password) {
    let result = null,
        error = null;
    try {
        console.log("called this metode");
        console.log(email);
        console.log(password);
        console.log("Hear")
        result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}