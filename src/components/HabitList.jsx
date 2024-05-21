import React, { useEffect, useState } from 'react'
import HabitItem from './HabitItem';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebase';

function HabitList() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'habits'), (snapshot) => {
      setHabits(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });
    return () => unsubscribe;
  }, [])
  return (
    <div>
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} />
      ))}
    </div>
  )
}

export default HabitList
