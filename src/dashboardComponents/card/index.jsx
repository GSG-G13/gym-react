/* eslint-disable no-underscore-dangle */
import {
  Box, Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import Group from '../../assets/undraw_group_selfie_re_h8gb.svg';
import Shop from '../../assets/undraw_shopping_app_flsj (2).svg';
import Classes from '../../assets/undraw_working_out_re_nhkg.svg';

const CardDash = ({
  users, trainers, categories, products, classes, subs,
}) => (
  <Box
    mt={2}
    sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 5,
      height: 'fit-content',
      placeContent: 'center',
    }}
  >
    <Card sx={{
      backgroundColor: 'rgba(255,255,255,0.07)',
      p: 2,
      borderRadius: 3,
      height: 'fit-content',
    }}
    >

      <CardMedia
        component="img"
        width="100px"
        image={Group}
        alt="green iguana"
      />
      <CardContent>
        <Typography textAlign="center" gutterBottom variant="h4" color="#fff" mt={2}>
          Users
        </Typography>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 3,
        }}
        >
          <Typography fontSize={12} color="#fff">client</Typography>
          <Typography fontSize={12} color="#fff">{users.length}</Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 3,
        }}
        >
          <Typography fontSize={12} color="#fff">Trainers</Typography>
          <Typography fontSize={12} color="#fff">{trainers.length}</Typography>
        </Box>
      </CardContent>
    </Card>
    <Card sx={{
      backgroundColor: 'rgba(255,255,255,0.07)',
      p: 2,
      borderRadius: 3,
      height: 'fit-content',

    }}
    >

      <CardMedia
        component="img"
        width="50%"
        image={Shop}
        alt="green iguana"
        height={150}

      />
      <CardContent>
        <Typography textAlign="center" gutterBottom variant="h4" color="#fff" mt={2}>
          Products
        </Typography>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2,1fr)',
          gap: 3,
          placeContent: 'center',
          mt: 2,
        }}
        >

          {categories.map((category) => (
            <Box>
              <Typography fontSize={12} color="#fff">{category.categoryName}</Typography>
              <Typography fontSize={12} color="#fff">{products.filter((product) => product.categoryId?._id === category._id).length}</Typography>
            </Box>
          ))}

        </Box>
      </CardContent>
    </Card>
    <Card sx={{
      backgroundColor: 'rgba(255,255,255,0.07)',
      p: 2,
      borderRadius: 3,
      height: 'fit-content',

    }}
    >

      <CardMedia
        component="img"
        width="100px"
        height="100%"
        image={Classes}
        alt="green iguana"
      />
      <CardContent>
        <Typography textAlign="center" gutterBottom variant="h4" color="#fff" mt={2}>
          Classes
        </Typography>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2,1fr)',
          gap: 3,
          placeContent: 'center',
          mt: 2,
        }}
        >
          {classes.map((classItem) => (
            <Box>
              <Typography fontSize={12} color="#fff">{classItem.className}</Typography>
              <Typography fontSize={12} color="#fff">{subs.filter((sub) => sub.classId._id === classItem._id).length}</Typography>
            </Box>
          ))}

        </Box>
      </CardContent>
    </Card>

  </Box>
);

export default CardDash;
