import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Paper, Typography } from '@mui/material';
import { mockTasks } from '../utils/mockData';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CalendarPage = () => {
  // Convert mock tasks to calendar events
  const events = mockTasks.map((task) => ({
    title: task.title,
    start: new Date(task.deadline),
    end: new Date(task.deadline),
    allDay: true,
  }));

  return (
    <Paper style={{ padding: '20px', borderRadius: '10px', height: '600px' }}>
      <Typography variant="h5" gutterBottom>Task Calendar</Typography>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </Paper>
  );
};

export default CalendarPage;