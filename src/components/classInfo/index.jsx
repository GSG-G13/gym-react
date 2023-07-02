import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import ButtonComponent from '../button/Button';
import ClassTable from '../classTable/ClassTable';

const ClassInfoComp = () => (
  <Box p={7} sx={{ border: '1px solid #ccc', borderRadius: 5 }}>
    <Container>
      <Typography mb={10} variant="h1">Yoga Class</Typography>
      <Box mt={3} sx={{ display: 'flex', alignItems: 'center', gap: 40 }}>
        <Box>
          <img
            src="https://goldsgym.in/uploads/blog/compress-strong-man-training-gym-min.jpg"
            alt="trainer"
            style={{
              width: 170, height: 170, borderRadius: '50%', objectFit: 'cover',
            }}
          />
          <Typography mt="10px" variant="h2">Hamdy Redwan</Typography>
        </Box>

        <ButtonComponent color="colors.darkBlue" flex="1">Join Class</ButtonComponent>
      </Box>
      <Box mt={2}>
        <Typography pr={3} variant="h5" sx={{ fontSize: '16px', fontWeight: '100' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of
          type and scrambled it to make a type specimen book.

        </Typography>

      </Box>
      <Box mt={4} sx={{ display: 'flex', justifyContent: 'center' }}>
        <ClassTable />
      </Box>
    </Container>
  </Box>
);

export default ClassInfoComp;
