import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import shopping from '../../assets/shopping.png'
import homeImage from '../../assets/homeStore.png'

const HomeStore = () => (
<Box sx={{display:'flex'}} border='1px solid #ccc'>
    <Container>
            <img
                src={shopping}
                alt='store-pic' style={{
                    width: '50%',
                }} />
            <Box  width={400}  sx={{ position: 'absolute', left: 450, top: 100 }}>
                <Typography fontWeight={700} variant='h1'>GYM Store</Typography>
                <Typography mt={3} variant='h5'>At Gym, you can shop for all useful stuff , clothes,
                    accessories, tools and more at a single place.</Typography>
            </Box>
            <img src={homeImage} alt='store-pic' style={{ width: '50%' }} />
    </Container>
</Box>
)

export default HomeStore
