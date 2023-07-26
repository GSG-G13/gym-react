/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

import {
  Box, Button, FormControl, InputLabel, MenuItem, Select,
} from '@mui/material';

import axios from 'axios';
import { toast } from 'react-toastify';
import ToastAlert from '../../../components/toastAlert/ToastAlert';

const localizer = momentLocalizer(moment);

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
      toast.success('add calendar successfully!', { theme: 'dark' });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteCalendar = async (e) => {
    try {
      await axios.delete(`/api/calendar/${e._id}`);
      getCalendars();
      toast.success('deleted calendar successfully!', { theme: 'dark' });
    } catch (error) {
      console.log('🚀 ~ file: index.jsx:61 ~ deleteCalendar ~ error:', error);
    }
  };
  useEffect(() => {
    getClasses();
    getCalendars();
  }, []);

  return (
    <Box>
      <ToastAlert />

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
            showTimeSelect
            placeholderText="Start Date"
            selected={newDate.start}
            onChange={(start) => setNewDate({ ...newDate, start })}
          />
          <DatePicker
            showTimeSelect
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
        onDoubleClickEvent={(e) => deleteCalendar(e)}
        popup
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
