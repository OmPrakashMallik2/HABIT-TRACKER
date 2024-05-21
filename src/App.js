// App.js
import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import CalendarView from './components/CalendarView';
import HabitForm from './components/HabitForm'
import HabitList from './components/HabitList'
import { db } from './config/firebase';

function App() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'habits'), (snapshot) => {
      setHabits(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Habit Tracker</h1>
      <HabitForm />
      <HabitList habits={habits} />
      <CalendarView habits={habits} />
    </div>
  );
}

export default App;
