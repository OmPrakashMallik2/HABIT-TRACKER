// CalendarView.js
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarView({ habits = [] }) {
    const formatDate = (date) => {
        return date.toISOString().split('T')[0];
    };

    const habitsByDate = habits.reduce((acc, habit) => {
        const date = formatDate(new Date(habit.date.seconds * 1000));
        if (!acc[date]) acc[date] = [];
        acc[date].push(habit);
        return acc;
    }, {});

    const tileContent = ({ date, view }) => {
        if (view === 'month') {
            const dateStr = formatDate(date);
            return habitsByDate[dateStr] ? (
                <ul>
                    {habitsByDate[dateStr].map(habit => (
                        <li key={habit.id}>{habit.name}</li>
                    ))}
                </ul>
            ) : null;
        }
    };

    return <Calendar tileContent={tileContent} />;
}

export default CalendarView;
