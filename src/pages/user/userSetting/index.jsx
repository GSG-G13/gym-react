import React from 'react';
import { Container } from '@mui/system';
import { Box, Typography } from '@mui/material';
import FormDashBoard from '../../../components/formDashboard/FormDashBoard';

const settingListObj = ['username', 'email', 'gender', 'weight', 'height', 'password', 'age', 'goalweight',
];
const UserSetting = () => (
  <Container sx={{
    border: '2px solid red',
    width: '850px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }}
  >
    <Box>
      <Typography>user information</Typography>
      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIAAgAMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAABQECBAMGB//EADEQAAIBAwIDBgUDBQAAAAAAAAABAgMEEQUhEjFRMkFSYXHBEyIjgdFikbEUQpKhov/EABYBAQEBAAAAAAAAAAAAAAAAAAACAf/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A/cQAAAAAA1nONOPFOSiurYGwOOpqNCPZ4p+iPF6qu6i/vIYKQJq1Vd9F/aR7U9RoS7TlD1QwdgNYThNZhJSXVGwAAAAAAAAAw3jdvCDaSbfJEe+vHXbhTeKa/wCgPe61HGY2+/637E+c5VHxTk5PzNT3srd3FXDyoLtMpjzo0alZ4pxcvPuR1R0ys1vKC+7KsIRhFRgkkuSRsZpiLU0+vBZSU1+l7nK4uLxJNNdT6Q8q1vSq71Kak+o0xBhOVOXFCTi+qZRtdRz8txhPumvc47yh/T1nFdl7x9DwNH0iaayuRkj2V46DUKjbpt/4ldPKyiWsgAAAa1JqFOU5corLAn6pcY+hB8+1+CazNSbqTlOXOTyalMCzpUVG1Uu+Tbf8EYqaRUk1Om38sd0ugoogAloAAJmsLek/X2JpS1h/NSXkyaVGBT0u4yvgze63j+CYbU5yhOM484vKFH0YNac1UpxnHlJZNiWhx6pPhtuHxNI7CbrD2pLzfsIJpgyYKSFTSKckp1HjhlsvsSyvpMs0JR74y/kVruABLQAATtWoylFVU1wx2a7yWWdVlw2vD4ml7kYqMoAAxZ0ufFbY8LaOwm6M9qq6NFImqCbrC2pPo2ikceqQ4rZy8LTEEYGTBSQ6LGrKlcQxLEZNKRzmfQD6QHla1XWt4VHza3PUlQAeF5W+BQlPGXyQEq/rOrcSXFmEXiKOYy3l5MFJADIFLR1tVfXHuUjj0qHDa8XibZ2EqDWpBVKcoS5SWGbAD52pB05yhLnF4ZoU9Utsr40Fuu1+SYVGAB12tlUqyUpxcaffnmwxTsY8FpST6Z/fc9zC2RklQcupR4rOflh/7Oo1nFSg4tZTWGB84DpubOrQbeHKHdJe5zFJDaEHUnGEecnhGpT0u2xmvNc9o/kVqhTgoQjGPKKwbAEtAABhrKwyZW02XxvpNKm+v9pUAHNb2VKhvjin4mdIAAAAAAAOSvp9GrvH6cuseX7HWAJVHTZfG+rhwW+z7RUSwsIyAAAAAAAAAAAAAAAAAAAAAAAAAP/Z" alt="profile-pic" />
    </Box>
    <FormDashBoard
      settingListObj={settingListObj}
    />
  </Container>

);
export default UserSetting;
