import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CategoryCard = () => (
  <Card sx={{ Width: 105, padding: '8px' }}>
    <CardActionArea>
      <CardMedia
        sx={{ borderRadius: '15px', margin: 'auto' }}
        component="img"
        height="125px"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQvjUwT6gqiDvnbElziouELL7lV97cOEtAIQ&usqp=CAU"
        alt="category product"
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          Equipment
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);
export default CategoryCard;
