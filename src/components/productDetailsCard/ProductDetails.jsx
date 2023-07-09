import { useState, useEffect } from 'react';
import {
  Box, Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ButtonComponent from '../button/Button';
import Alerts from '../alert/Alert';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const amount = 1;
  const getProductDetails = async () => {
    const response = await axios.get(`/api/products/${id}`);
    setProduct(response.data.product);
  };

  const addOrder = async () => {
    try {
      const { data } = await axios.post(`/api/orders/${id}`, { amount });

      setMessage(data.msg);
    } catch (error) {
      console.log(error);
      setErrorMsg('you have been already orderd');
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <Card sx={{
      boxShadow: '-3px 4px 1px -1px #ff4601',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '10px',
      width: '900px',
      height: '600px',
      p: '30px',
      margin: 'auto',
      backgroundColor: 'rgba(0,0,0,0.1)',

    }}
    >
      <CardMedia
        component="img"
        sx={{
          width: '330px', height: '350px', borderRadius: '15px', objectFit: 'cover',
        }}
        image={product.image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }} pl="20px">
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h2" fontWeight={600} color="colors.secondary">
            {product.title}
          </Typography>
          {product.description && (
            <Typography variant="subtitle1" color="colors.secondary" py={2} mr={3}>
              {product.description}
            </Typography>
          )}
          <Box py="20px">
            <Typography mb={1} variant="h5" color="colors.secondary">
              Reviews
            </Typography>
            <StarIcon sx={{ color: 'colors.darkBlue' }} />
            <StarIcon sx={{ color: 'colors.darkBlue' }} />
            <StarIcon sx={{ color: 'colors.darkBlue' }} />
            <StarIcon sx={{ color: 'colors.darkBlue' }} />
            <StarBorderIcon sx={{ borderColor: 'colors.darkBlue', color: '#fff' }} />
          </Box>

          <ButtonComponent width="115px" onClick={addOrder} color="colors.darkBlue">{message ? 'Requested' : 'Order'}</ButtonComponent>
        </CardContent>
        {errorMsg
          ? <Alerts type="error" message={errorMsg} />
          : null}
      </Box>
    </Card>
  );
};

export default ProductDetails;
