'use client'
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '@/firebase/config'
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import addData from '@/firebase/firestore/addData';
import getData from '@/firebase/firestore/getData';



export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter()
  const userSession = sessionStorage.getItem('user');

 
  if (!user && !userSession){
    router.push('/signin')
  }

  const handleForm = async () => {
    const data = {
        name: 'John Snow',
        house: 'Stark'
    };
    const { error } = await addData('users', 'user-id', data);

    if (error) {
        return console.log(error);
    }

    console.log('Data successfully written!');
};
const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const handleFetchData = async () => {
        const { result, error } = await getData('users', 'user-id');
        if (error) {
            setError(error.message);
        } else {
            setData(result.data());
        }
    };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <h1>Main page</h1>
    <div>
            <button onClick={handleFetchData}>Fetch Data</button>
            {error && <p>Error: {error}</p>}
            {data && <p>Data: {JSON.stringify(data)}</p>}
        </div>
    <button onClick={() => {
        signOut(auth)
        sessionStorage.removeItem('user')
        }}>
        Log out
      </button>
      <button onClick={handleForm}>Handleform</button>
    <nav>
        <Link href="/admin">Admin</Link>
      </nav>
    </div>
  );
}


