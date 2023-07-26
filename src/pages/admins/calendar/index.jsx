/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import {
  Box, Button, FormControl, InputLabel, MenuItem, Select,
} from '@mui/material';
import {
  format, startOfWeek, parse, getDay,
} from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import axios from 'axios';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CalendarDash = () => {
  const [calendarsData, setCalendarsData] = useState([]);
  const [newDate, setNewDate] = useState({});
  const [classes, setClasses] = useState([]);
  const [classId, setClassId] = useState('');

  const getClasses = async () => {
    try {
      const { data: { classesData } } = await axios.get('/api/classes');
      setClasses(classesData);
    } catch (error) {
      console.log(error);
    }
  };

  const getCalendars = async () => {
    try {
      const { data: { calendars } } = await axios.get('/api/calendar');
      const classCalendar = calendars.map((calendarClassData) => ({
        _id: calendarClassData?._id,
        title: calendarClassData.classId?.className,
        start: new Date(calendarClassData?.start),
        end: new Date(calendarClassData?.end),
      }));
      setCalendarsData(classCalendar);
    } catch (error) {
      console.log(error);
    }
  };

  const addCalendar = async () => {
    try {
      axios.post(`/api/calendar/${classId}`, newDate);
      setCalendarsData([...calendarsData, newDate]);
      getCalendars();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getClasses();
    getCalendars();
  }, []);

  return (
    <Box>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(1,1fr)',
        justifyContent: 'center',
        gap: 2,
        mt: 5,
      }}
      >
        <FormControl>
          <InputLabel sx={{ fontSize: 13, color: '#fff' }} htmlFor="class-select">
            Classes
          </InputLabel>

          <Select
            id="class-select"
            onChange={(e) => setClassId(e.target.value)}
            sx={{
              fontSize: 12,
              color: '#fff',
              border: '1px solid #373737',
              width: '100%',
            }}
          >
            {classes.map((classData) => (
              <MenuItem value={classData?._id} key={classData?._id}>
                {classData?.className}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          p: 2,
        }}
        >
          <DatePicker
            placeholderText="Start Date"
            selected={newDate.start}
            onChange={(start) => setNewDate({ ...newDate, start })}
          />
          <DatePicker
            placeholderText="End Date"
            selected={newDate.end}
            onChange={(end) => setNewDate({ ...newDate, end })}
          />
        </Box>
        <Button sx={{ margin: 'auto', width: 'fit-content' }} onClick={addCalendar}>
          Add Date
        </Button>
      </Box>
      <Calendar
        localizer={localizer}
        events={calendarsData}
        startAccessor="start"
        endAccessor="end"
        style={{
          height: 500, margin: '50px', color: '#fff', fontSize: 12,
        }}
      />
    </Box>
  );
};

export default CalendarDash;
