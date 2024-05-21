import React, { useState } from 'react';
import { auth, googleAuthProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import GoogleButton from 'react-google-button'
import { Button } from '@mui/material';

function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    console.log(auth?.currentUser?.photoURL);

    const signin = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setError(error.message);
        }
    }

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            setError(error.message);
        }
    }
    const signWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleAuthProvider);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className='bg-blue-200 p-10'>
            <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder='Email'
                className='p-2 border rounded'
            />
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder='Password'
                className='p-2 border rounded'
            />
            <button onClick={signin} className='p-2 bg-blue-500 text-white rounded'>Signin</button>
            {error && <p className='text-red-500'>{error}</p>}
            {auth.currentUser && (
                <p>Logged in as: {auth.currentUser.email}</p>
            )}

            <GoogleButton
                onClick={signWithGoogle}
            />

            <Button variant='contained' onClick={logout}>LOGOUT</Button>
        </div>
    )
}

export default Auth;
