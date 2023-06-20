/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import {
  Card, CardContent, CardMedia, Typography,
} from '@mui/material';

const TrainerCard = () => (
  <Card sx={{
    maxWidth: '278px',
    height: '497px',
    p: 3,
    '&': { boxShadow: 'none' },
  }}
  >
    <CardMedia
      sx={{
        height: '400px',
        width: '270px',
        borderRadius: '50px',
      }}
      image="https://media.istockphoto.com/id/675179390/photo/muscular-trainer-writing-on-clipboard.jpg?s=612x612&w=0&k=20&c=9NKx1AwVMpPY0YBlk5H-hxx2vJSCu1Wc78BKRM9wFq0="
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h6">
        Leslie Alexander
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Gym Trainer
      </Typography>
    </CardContent>

  </Card>
);

export default TrainerCard;
