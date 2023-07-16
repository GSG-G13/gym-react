import {
  Box, Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import Group from '../../assets/undraw_group_selfie_re_h8gb.svg';
import Shop from '../../assets/undraw_shopping_app_flsj (2).svg';
import Classes from '../../assets/undraw_working_out_re_nhkg.svg';

const CardDash = () => (
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
          <Typography fontSize={12} color="#fff">30000</Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 3,
        }}
        >
          <Typography fontSize={12} color="#fff">Trainers</Typography>
          <Typography fontSize={12} color="#fff">6</Typography>
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
          <Box>
            <Typography fontSize={12} color="#fff">clothes</Typography>
            <Typography fontSize={12} color="#fff">20</Typography>
          </Box>
          <Box>
            <Typography fontSize={12} color="#fff">clothes</Typography>
            <Typography fontSize={12} color="#fff">20</Typography>
          </Box>
          <Box>
            <Typography fontSize={12} color="#fff">clothes</Typography>
            <Typography fontSize={12} color="#fff">20</Typography>
          </Box>
          <Box>
            <Typography fontSize={12} color="#fff">clothes</Typography>
            <Typography fontSize={12} color="#fff">20</Typography>
          </Box>
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
          <Box>
            <Typography fontSize={12} color="#fff">yoga</Typography>
            <Typography fontSize={12} color="#fff">20</Typography>
          </Box>
          <Box>
            <Typography fontSize={12} color="#fff">building</Typography>
            <Typography fontSize={12} color="#fff">20</Typography>
          </Box>
          <Box>
            <Typography fontSize={12} color="#fff">fitness</Typography>
            <Typography fontSize={12} color="#fff">20</Typography>
          </Box>
          <Box>
            <Typography fontSize={12} color="#fff">anything</Typography>
            <Typography fontSize={12} color="#fff">20</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>

  </Box>
);

export default CardDash;
