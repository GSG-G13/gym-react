/* eslint-disable no-unreachable-loop */
import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import ProductCard from '../productCard';

const productsobj = [{
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxvZXnDD30O1I2TSi58nzyCIKyVE6rVcfzxw&usqp=CAU',
  title: 'weight Loose',
  cost: '300$',
},
{
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxvZXnDD30O1I2TSi58nzyCIKyVE6rVcfzxw&usqp=CAU',
  title: 'weight Loose',
  cost: '300$',
}, {
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxvZXnDD30O1I2TSi58nzyCIKyVE6rVcfzxw&usqp=CAU',
  title: 'weight Loose',
  cost: '300$',
},

];

const ProductList = () => (
  <Box
    component="div"
    sx={{
      width: '900px', height: '500px',
    }}
  >
    <Container>
      <Typography align="left" pt="25PX" fontSize="25PX">Clothes</Typography>
      <Box mt={2} sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
        { productsobj.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </Box>
    </Container>
  </Box>
);
export default ProductList;
