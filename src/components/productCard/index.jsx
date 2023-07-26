/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <Card sx={{ p: '5px', backgroundColor: 'transparent', boxShadow: ' 0px 2px 5px 0px rgba(231,90,37,0.75)' }}>
    <CardMedia
      sx={{ borderRadius: 2 }}
      component="img"
      alt="gym product"
      height="138"
      image={product.image}

    />
    <CardContent sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 1,
    }}
    >
      <Typography variant="h5" color="white">
        {product.title}
      </Typography>
      <Typography variant="h5" color="white">
        {product.price}
        {' '}
        $
      </Typography>
    </CardContent>
    <CardActions sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      <Button
        sx={{
          px: 3,
          fontSize: '11px',
          backgroundColor: '#FF4601',
          '&:hover': { backgroundColor: '#FF4601' },
        }}
        variant="contained"
      >
        <Link to={`/product/${product._id}`} style={{ color: '#fff', textDecoration: 'none' }}>Shop Now</Link>
      </Button>

    </CardActions>
  </Card>
);

export default ProductCard;
