import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProductCard = ({ product }) => (
  <Card sx={{ Width: '155', border: '1px solid white', p: '8px' }}>
    <CardMedia
      sx={{ borderRadius: '20px' }}
      component="img"
      alt="gym product"
      height="138"
      image={product.image}
    />
    <CardContent>
      <Typography gutterBottom variant="p" component="div" sx={{ paddingBottom: '8px' }}>
        weight loose
      </Typography>
      <Typography variant="body2" color="text.secondary">
        300$
      </Typography>
    </CardContent>
    <CardActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Button
        sx={{
          width: '118px', height: '31px', fontSize: '12px', backgroundColor: '#002B5B', '&:hover': { backgroundColor: '#002B5B' },
        }}
        variant="contained"
      >
        Shop Now
      </Button>

    </CardActions>
  </Card>
);

export default ProductCard;
