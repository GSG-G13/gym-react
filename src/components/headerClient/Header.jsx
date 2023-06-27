import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import ButtonComponent from '../button/Button';
import { ReactComponent as HeaderPhoto } from '../../assets/personal_trainer.svg';
import { Link } from 'react-router-dom';

const Header = () => (
  <Box height="91vh" mt={6}>
    <Container>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        mt={15}
      >
        <Box
          align="center"
          height="500px"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h1" fontWeight="700" fontSize="50px" width="460px" letterSpacing={2}>
            <Typography variant="span">Unleash </Typography>
            Your Inner Athlete
          </Typography>
          <Typography variant="h6" align="center" width="460px" my={4} pr={5}>
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Ducimus nulla,
            facere vel sed nisi
            expedita est quod doloremque
            perspiciatis sequi,
            odit minus inventore pariatur
            numquam repellat blanditiis commodi eius.
            Modi.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <ButtonComponent color="colors.darkBlue">
              <Link to="/class">Start A Session</Link>
            </ButtonComponent>
            <ButtonComponent color="colors.darkBlue">
              <Link to="/store">Shop Now</Link>
            </ButtonComponent>
          </Box>
        </Box>
        <Box>
          <HeaderPhoto style={{ width: '550px', height: '420px' }} />
        </Box>
      </Box>
    </Container>
  </Box>
);

export default Header;
