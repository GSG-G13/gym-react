/* eslint-disable no-unreachable-loop */
import Box from '@mui/material/Box';
import { Container, Divider, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../productCard';

const ProductList = () => {
  const [allProducts, setAllProducts] = useState();
  const [storeTitle, setStoreTitle] = useState('');
  const getProducts = async () => {
    const { data, status } = await axios.get('/api/products');
    if (status === 200) {
      setAllProducts(data.products);
      setStoreTitle('All Products');
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Box
      mb={10}
      component="div"
      flex={1}
      py={3}
    >
      <Container>
        <Typography pb={1} align="left" variant="h3" fontWeight={600}>{storeTitle}</Typography>
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
          {allProducts?.length < 0 ? allProducts?.map((product) => (
            // eslint-disable-next-line no-underscore-dangle
            <ProductCard key={product._id} product={product} />
          ))
            : <Typography variant="h2">there is no data</Typography>}
        </Box>
      </Container>
    </Box>
  );
};
export default ProductList;
