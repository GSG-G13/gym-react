/* eslint-disable no-underscore-dangle */
import { Box } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import { toast } from 'react-toastify';
import {
  AddButton, AddForm, DashTable, EditForm, SearchInpDash,
} from '../../../dashboardComponents';
import ToastAlert from '../../../components/toastAlert/ToastAlert';

const classInfo = ['className', 'description', 'price', 'userCount'];
const classDataTable = ['className', 'description', 'price', 'userCount', 'trainer'];
const EditClassInfo = ['className', 'description', 'price', 'userCount'];

const initialState = {
  className: '',
  description: '',
  price: '',
  userCount: '',
};

const reducer = (state, action) => ({
  ...state,
  [action.filedName]: action.value,
});

const ClassDash = () => {
  const [showForm, setShowForm] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [classes, setClasses] = useState([]);
  const [filteredClasses, setFilteredClasses] = useState([]);

  const [trainerId, setTrainerId] = useState('');
  const [trainersData, setTrainersData] = useState([]);
  const [showEditForm, setEditShowForm] = useState(false);
  const [oneClass, setOneClass] = useState({});
  const [classData, setClassData] = useState({
    className: oneClass.className,
    description: oneClass.description,
    price: oneClass.price,
    userCount: oneClass.userCount,
    trainerId,
  });

  const values = [
    state.className,
    state.description,
    state.price,
    state.userCount,
  ];

  const handleChange = (e, filedName) => {
    const { value } = e.target;
    dispatch({
      filedName,
      value,
    });
  };

  const getClasses = async () => {
    try {
      const { data: { classesData } } = await axios.get('/api/classes');
      const classArray = [];
      classesData.map((classItem) => classArray.push(
        { ...classItem, trainer: classItem.trainerId?.username },
      ));
      setClasses(classArray);
    } catch (error) {
      console.log(error);
    }
  };

  const getTrainers = async () => {
    try {
      const { data: { allTrainers } } = await axios.get('/api/users/trainers');
      setTrainersData(allTrainers);
    } catch (error) {
      console.log(error);
    }
  };

  const addClass = async () => {
    try {
      await axios.post(`/api/classes/${trainerId}`, state);
      getClasses();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteClass = async (id) => {
    try {
      axios.delete(`/api/classes/${id}`);
      getClasses();
      toast.success('Delete successfully!');
    } catch (error) {
      toast.error('Delete Failed!');
    }
  };

  const getClassById = async (id) => {
    const { data: { classObj } } = await axios.get(`/api/classes/${id}`);

    setOneClass({
      _id: classObj._id,
      className: classObj.className,
      description: classObj.description,
      price: classObj.price,
      userCount: classObj.userCount,
      trainer: classObj.trainerId?.username,
    });

    setClassData({
      className: classObj.className,
      description: classObj.description,
      price: classObj.price,
      userCount: classObj.userCount,
      trainerId: classObj.trainerId,
    });
  };

  const updateClass = async () => {
    try {
      // eslint-disable-next-line no-underscore-dangle
      axios.put(`/api/classes/${oneClass._id}`, classData);
      setEditShowForm(false);
      getClasses();
      setClassData({
        className: '',
        description: '',
        price: '',
        userCount: '',
        trainerId: '',
      });
      toast.success('Update successfully!!', { theme: 'dark' });
    } catch (error) {
      toast.error('Really Updated!!', { theme: 'dark' });
    }
  };

  const filterFunc = ({ text }) => {
    if (text) {
      setFilteredClasses(() => classes.filter((item) => item.className.includes(text)));
    } else {
      setFilteredClasses(classes);
    }
  };
  useEffect(() => {
    getTrainers();
    getClasses();
  }, []);
  const classesArray = filteredClasses.length > 0 ? filteredClasses : classes;

  return (
    <Box mt={10}>
      <ToastAlert />
      <Box
        sx={{
          display: 'flex',
          gap: 2,
        }}
      >
        {classes && classes?.length > 0 && <SearchInpDash data={classes} handleClick={filterFunc} searchBy="className" />}
        <AddButton text="Add Class" setShowForm={setShowForm} showForm={showForm} />
      </Box>

      <Box mt={5}>
        <DashTable
          array={classesArray}
          userInfo={classDataTable}
          deleteFunction={deleteClass}
          updateFunction={updateClass}
          setEditShowForm={setEditShowForm}
          showEditForm={showEditForm}
          getData={getClassById}
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
          classInfo={classInfo}
          axiosData={addClass}
          setState={handleChange}
          values={values}
          filedName={classInfo}
          head={classInfo}
          selectData={trainersData}
          selectDataId={trainerId}
          setSelectDataId={setTrainerId}
          title="Add Class"
          selectLabel="Trainer"
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
          axiosData={updateClass}
          setState={setClassData}
          values={oneClass}
          state={classData}
          filedName={classInfo}
          head={EditClassInfo}
          title="Edit Class"
          setSelectDataId={setTrainerId}
          selectDataId={trainerId}
          selectData={trainersData}
        />
      </Box>
    </Box>
  );
};

export default ClassDash;
