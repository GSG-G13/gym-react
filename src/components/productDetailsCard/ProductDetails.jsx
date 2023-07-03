import { useState, useEffect } from 'react';
import {
  Box, Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ButtonComponent from '../button/Button';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const getProductDetails = async () => {
    const response = await axios.get(`/api/products/${id}`);
    setProduct(response.data.product);
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <Card sx={{
      display: 'flex',
      alignItems: 'center',
      borderRadius: '10px',
      '&': { boxShadow: 'none' },
      border: '1px solid #ccc',
      p: '30px',
      margin: 'auto',
      backgroundColor: 'transparent',
    }}
    >
      <CardMedia
        component="img"
        sx={{ width: '330px', height: '350px', borderRadius: '20px' }}
        image={product.image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }} pl="20px">
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h2" fontWeight={700}>
            {product.title}
          </Typography>
          {product.description && (
          <Typography variant="subtitle1" color="text.secondary" py={2} mr={3}>
            {product.description }
          </Typography>
          )}
          <Box py="20px">
            <Typography variant="h5">
              Reviews
            </Typography>
            <StarIcon sx={{ color: 'colors.darkBlue' }} />
            <StarIcon sx={{ color: 'colors.darkBlue' }} />
            <StarIcon sx={{ color: 'colors.darkBlue' }} />
            <StarIcon sx={{ color: 'colors.darkBlue' }} />
            <StarBorderIcon sx={{ borderColor: 'colors.darkBlue' }} />
          </Box>

          <ButtonComponent color="colors.darkBlue">Order</ButtonComponent>
        </CardContent>

      </Box>
    </Card>
  );
};

export default ProductDetails;
