/* eslint-disable no-unused-vars */
import { Box } from '@mui/material';
import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const userData2 = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45000,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 22200,
    userLost: 234,
  },
  {
    id: 6,
    year: 2021,
    userGain: 44400,
    userLost: 234,
  },
  {
    id: 7,
    year: 2022,
    userGain: 66600,
    userLost: 234,
  },
  {
    id: 8,
    year: 2023,
    userGain: 43000,
    userLost: 234,
  },
];
const ChartDash = () => {
  const [userData, setUserData] = useState({
    labels: userData2.map((data) => data.year),
    datasets: [{
      label: 'user gained',
      data: userData2.map((data) => data.userGain),
      backgroundColor: [
        'rgba(75,192,192,1)',
        'orange',
        '#50af95',
        '#f3ba2f',
        '#2a71d0',
      ],
    }],
  });
  return (
    <Box width={820} backgroundColor="rgba(255,255,255,0.02)">
      <Bar data={userData} />

    </Box>
  );
};

export default ChartDash;
