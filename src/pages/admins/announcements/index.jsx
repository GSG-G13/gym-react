/* eslint-disable no-underscore-dangle */
import { Box } from '@mui/material';
import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  AddButton, AddForm, DashTable, EditForm, SearchInpDash,
} from '../../../dashboardComponents';
import ToastAlert from '../../../components/toastAlert/ToastAlert';

const announcementInfo = ['title', 'image', 'description'];
const announcementInfoTable = ['title', 'image', 'description'];

const initialState = {
  title: '',
  image: '',
  description: '',
};
const reducer = (state, action) => ({
  ...state,
  [action.filedName]: action.value,
});
const AnnouncementDash = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showEditForm, setEditShowForm] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [announcements, setAnnouncements] = useState([]);
  const [announcement, setAnnouncement] = useState({});

  const values = [
    state.title,
    state.image,
    state.description,

  ];
  const handleChange = (e, filedName) => {
    const { value } = e.target;
    dispatch({
      filedName,
      value,
    });
  };

  const getAnnouncements = async () => {
    try {
      const { data } = await axios.get('/api/announcements');
      setAnnouncements(data.announcements);
    } catch (error) {
      console.log(error);
    }
  };

  const getAnnouncementById = (id) => {
    const announce = announcements.filter((item) => item._id === id);
    setAnnouncement(announce[0]);
  };

  const addAnnouncement = async () => {
    try {
      await axios.post('/api/announcements', state);
      getAnnouncements();
      setShowForm(false);
      toast.success('add announcement successfully!', { theme: 'dark' });
    } catch (error) {
      toast.success('add Failed!', { theme: 'dark' });
    }
  };

  const deleteAnnouncement = async (id) => {
    try {
      axios.delete(`/api/announcements/${id}`);
      getAnnouncements();
      toast.success('Delete Successfully!', { theme: 'dark' });
    } catch (error) {
      toast.error('Delete Failed!', { theme: 'dark' });
    }
  };

  const updateAnnouncement = async () => {
    try {
      await axios.put(`/api/announcements/${announcement._id}`, state);
      getAnnouncements();
      setEditShowForm(false);
      toast.success('Update Successfully!', { theme: 'dark' });
    } catch (error) {
      toast.error('Update Failed!', { theme: 'dark' });
    }
  };

  useEffect(() => {
    getAnnouncements();
  }, []);
  return (
    <Box mt={10}>
      <ToastAlert />
      <Box
        sx={{
          display: 'flex',
          gap: 2,
        }}
      >
        <SearchInpDash />
        <AddButton text="Add Announcement" setShowForm={setShowForm} showForm={showForm} />
      </Box>

      <Box mt={5}>
        <DashTable
          array={announcements}
          userInfo={announcementInfoTable}
          deleteFunction={deleteAnnouncement}
          getData={getAnnouncementById}
          setEditShowForm={setEditShowForm}
          showEditForm={showEditForm}
        />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          height: '100%',
          width: '40%',
          backgroundColor: '#111010',
          p: '20px 20px',
          transform: `translateX(${showForm ? 0 : '100%'})`,
          transition: '0.5s ease-in-out',
        }}
      >
        <AddForm
          setShowForm={setShowForm}
          showForm={showForm}
          head={announcementInfo}
          setState={handleChange}
          axiosData={addAnnouncement}

        />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          height: '100%',
          width: '40%',
          backgroundColor: '#111010',
          p: '20px 20px',
          transform: `translateX(${showEditForm ? 0 : '100%'})`,
          transition: '0.5s ease-in-out',
        }}
      >
        <EditForm
          setShowForm={setEditShowForm}
          showForm={showEditForm}
          setState={handleChange}
          values={announcement}
          state={values}
          filedName={announcementInfo}
          head={announcementInfo}
          axiosData={updateAnnouncement}

        />
      </Box>
    </Box>
  );
};

export default AnnouncementDash;
