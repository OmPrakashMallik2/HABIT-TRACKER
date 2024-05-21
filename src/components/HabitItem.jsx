import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import React from 'react'
import { db } from '../config/firebase';

function HabitItem({ habit }) {

  const handleToggleComplete = async () => {
    await updateDoc(doc(db, 'habits', habit.id), {
      completed: !habit.completed
    })
  };


  const handleDelete = async () => {
    await deleteDoc(doc(db, 'habits', habit.id));
  };

  return (
    <div>
      <span style={{ textDecoration: habit.completed ? 'line-through' : 'none' }}>
        {habit.name}
      </span>
      <button onClick={handleToggleComplete}>
        {habit.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default HabitItem
