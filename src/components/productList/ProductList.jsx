/* eslint-disable no-unreachable-loop */
import Box from '@mui/material/Box';
import { Container, Divider, Typography } from '@mui/material';
import { useState } from 'react';
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
{
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxvZXnDD30O1I2TSi58nzyCIKyVE6rVcfzxw&usqp=CAU',
  title: 'weight Loose',
  cost: '300$',
}, {
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxvZXnDD30O1I2TSi58nzyCIKyVE6rVcfzxw&usqp=CAU',
  title: 'weight Loose',
  cost: '300$',
}, {
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxvZXnDD30O1I2TSi58nzyCIKyVE6rVcfzxw&usqp=CAU',
  title: 'weight Loose',
  cost: '300$',
},
{
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxvZXnDD30O1I2TSi58nzyCIKyVE6rVcfzxw&usqp=CAU',
  title: 'weight Loose',
  cost: '300$',
},
{
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxvZXnDD30O1I2TSi58nzyCIKyVE6rVcfzxw&usqp=CAU',
  title: 'weight Loose',
  cost: '300$',
},
{
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxvZXnDD30O1I2TSi58nzyCIKyVE6rVcfzxw&usqp=CAU',
  title: 'weight Loose',
  cost: '300$',
},
{
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxvZXnDD30O1I2TSi58nzyCIKyVE6rVcfzxw&usqp=CAU',
  title: 'weight Loose',
  cost: '300$',
},
{
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxvZXnDD30O1I2TSi58nzyCIKyVE6rVcfzxw&usqp=CAU',
  title: 'weight Loose',
  cost: '300$',
},
];

const ProductList = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  return (
    <Box
      mb={10}
      component="div"
      flex={1}
      py={3}
    >
      <Container>
        <Typography pb={1} align="left" variant="h3" fontWeight={600}>Clothes</Typography>
        <Divider />

        <Box
          px={4}
          my={5}
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 200px)',
            gap: 3,
          }}
        >
          {productsobj.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};
export default ProductList;
