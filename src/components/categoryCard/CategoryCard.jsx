import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CategoryCard = ({ category }) => (
  <Card sx={{
    width: '80px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  }}
  >
    <CardActionArea sx={{ width: '50px' }}>
      <CardMedia
        sx={{ margin: 'auto' }}
        component="img"
        height="auto"
        image={category.image}
        alt="category product"
      />
      <CardContent sx={{ padding: '3px', textAlign: 'center' }}>
        <Typography gutterBottom variant="h5">
          {category.title}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);
export default CategoryCard;
