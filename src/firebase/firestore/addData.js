// import app from "../config";
// import { getFirestore, doc, setDoc } from "firebase/firestore";

// const db = getFirestore(app)
// export default async function addData(colllection, id, data) {
//     let result = null;
//     let error = null;

//     try {
//         result = await setDoc(doc(db, colllection, id), data, {
//             merge: true,
//         });
//     } catch (e) {
//         error = e;
//     }

//     return { result, error };
// }

import { getFirestore, doc, setDoc } from 'firebase/firestore';
import app from '../config';

const db = getFirestore(app);

const addData = async (collection, id, data) => {
    let error = null;
    console.log("wow why")

    try {
        await setDoc(doc(db, collection, id), data, { merge: true });
    } catch (e) {
        error = e;
    }

    return { error };
};

export default addData;
