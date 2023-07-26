/* eslint-disable no-unreachable-loop */
import Box from '@mui/material/Box';
import {
  Button, Container, Divider, Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useOutletContext } from 'react-router';
import CancelIcon from '@mui/icons-material/Cancel';
import ProductCard from '../productCard';

const ProductList = () => {
  let category = useOutletContext();
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const getProductsByCategory = () => {
    if (!category) {
      return;
    }
    const filteredData = allProducts.filter(
      (product) => product.categoryId?.categoryName === category,
    );

    setFilteredProducts([filteredData]);
  };

  const getProducts = async () => {
    const { data, status } = await axios.get('/api/products');
    if (status === 200) {
      setAllProducts(data.products);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProductsByCategory();
  }, [category]);
  return (
    <Box
      mb={10}
      component="div"
      flex={1}
      py={3}
    >
      <Container>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography color="#fff " variant="h3" fontWeight={600}>{!category ? 'All product' : category}</Typography>
          {category ? (
            <Button onClick={

              () => {
                category = '';
                setFilteredProducts([]);
              }
            }
            >
              <CancelIcon />
            </Button>
          ) : null}

        </Box>
        <Divider />

        <Box
          px={4}
          my={5}
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 200px)',
            gap: 8,
          }}
        >
          {
            // eslint-disable-next-line no-nested-ternary
            filteredProducts[0]?.length > 0 ? filteredProducts[0]?.map((product) => (
              // eslint-disable-next-line no-underscore-dangle
              <ProductCard key={product._id} product={product} />
            ))
              : allProducts?.length > 0 ? allProducts?.map((product) => (
                // eslint-disable-next-line no-underscore-dangle
                <ProductCard key={product._id} product={product} />
              ))
                : <Typography variant="h2">there is no data</Typography>
          }
        </Box>
      </Container>
    </Box>
  );
};
export default ProductList;
