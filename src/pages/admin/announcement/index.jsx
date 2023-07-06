import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import DashBoardLayOut from '../LayOut';
import DropDownList from '../../../components/dropDownList';

const userInfo = ['title', 'description', 'image'];

const announcementColumns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    type: 'string',
    width: 110,
    editable: true,
  },
  {
    field: 'image',
    headerName: 'Image',
    type: 'string',
    width: 110,
    editable: true,
  },
  {
    field: 'delete',
    headerName: 'Delete',
    width: 100,
    renderCell: (row) => (
      <DropDownList
        row={row}
        userInfo={userInfo}
        filedName={userInfo}
        url="/api/announcements"
      />
    ),
  },
];

const initialState = {
  title: '',
  description: '',
  image: '',
};

const reducer = (state, action) => ({
  ...state,
  [action.filedName]: action.value,
});

const AnnouncementDashboard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const values = [state.title, state.description, state.image];
  const [tableData, setTableData] = useState([]);
  const handleChange = (e, filedName) => {
    const { value } = e.target;
    dispatch({
      filedName,
      value,
    });
  };

  const sendData = async () => {
    await axios.post(
      '/api/announcements',
      state,
    );
  };

  const getAnnouncement = async () => {
    const { data } = await axios.get('/api/announcements');
    setTableData(data.announcements);
  };
  useEffect(() => {
    getAnnouncement();
  }, []);

  return (
    <DashBoardLayOut
      buttonName="Add Announcmennt"
      columns={announcementColumns}
      rows={tableData}
      userInfo={userInfo}
      setStates={handleChange}
      axiosData={sendData}
      filedName={userInfo}
      value={values}
    />
  );
};

export default AnnouncementDashboard;
