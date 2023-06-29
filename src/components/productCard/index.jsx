import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
      display: 'flex', flexDirection: 'column', gap: 1,
    }}
    >
      <Typography variant="h5">
        weight loose
      </Typography>
      <Typography variant="body2" color="text.secondary">
        300$
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
        Shop Now
      </Button>

    </CardActions>
  </Card>
);

export default ProductCard;
