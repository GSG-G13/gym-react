/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, NavLink } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <Card sx={{ p: '5px', backgroundColor: 'transparent' }}>
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
      <Typography variant="h5">
        {product.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
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
          backgroundColor: '#002B5B',
          '&:hover': { backgroundColor: '#002B5B' },
        }}
        variant="contained"
      >
        <Link to={`/product/${product._id}`} style={{ color: '#fff', textDecoration: 'none' }}>Shop Now</Link>
      </Button>

    </CardActions>
  </Card>
);

export default ProductCard;
