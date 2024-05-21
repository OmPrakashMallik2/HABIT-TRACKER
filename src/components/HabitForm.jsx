import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../config/firebase';

function HabitForm() {

    const [name, setName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, 'habits'), {
            name: name,
            completed: false,
            date: new Date()
        });
        setName("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Habit Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <button type="submit">Add habit</button>
            </form>
        </div>
    )
}

export default HabitForm
