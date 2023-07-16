import {
  Box, Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import SubscriptionImg from '../../assets/undraw_newsletter_re_wrob.svg';
import Team from '../../assets/undraw_team_page_re_cffb.svg';
import ClassRoom from '../../assets/undraw_social_interaction_re_dyjh.svg';
import Time from '../../assets/undraw_time_management_re_tk5w.svg';

const HomeClass = () => (

  <Box
    mt={12}
  >
    <Box mt={3}>
      <Typography
        variant="h1"
        sx={{
          fontWeight: 700,
          background: 'linear-gradient(to right,#ff5700, #ffe707)',
          width: 'fit-content',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        }}
      >
        Welcome To Our Community

      </Typography>
      <Typography
        sx={{
          fontSize: 14,
          mt: 7,
          lineHeight: 1.8,
          textAlign: 'center',
        }}
      >
        We have the map to find your best version of your body.
      </Typography>
      <Box
        mt={5}
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          gap: 5,
        }}
      >
        <Card sx={{
          backgroundColor: 'transparent',
          boxShadow: '0px 0px 10px 0px rgb(255, 70, 1)',
          p: 2,
          borderTopRightRadius: 50,
          borderBottomLeftRadius: 50,
        }}
        >

          <CardMedia
            component="img"
            width="50%"
            image={SubscriptionImg}
            alt="green iguana"
          />
          <CardContent>
            <Typography textAlign="center" gutterBottom variant="h4" color="#fff" mt={2}>
              Subscriptions
            </Typography>
            <Typography
              fontSize={12}
              fontWeight={100}
              color="#fff"
              mt={3}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
              }}
            >
              <Typography fontSize={12}>
                6,000
              </Typography>
              Subscription
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{
          backgroundColor: 'transparent',
          boxShadow: '0px 0px 10px 0px rgb(255, 70, 1)',
          p: 2,
          borderTopRightRadius: 50,
          borderBottomLeftRadius: 50,
        }}
        >

          <CardMedia
            component="img"
            width="50%"
            image={Team}
            alt="green iguana"
          />
          <CardContent>
            <Typography textAlign="center" gutterBottom variant="h4" color="#fff" mt={2}>
              Trainer
            </Typography>
            <Typography
              fontSize={12}
              fontWeight={100}
              color="#fff"
              mt={3}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
              }}
            >
              <Typography fontSize={12}>
                6,000
              </Typography>
              Trainer
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{
          backgroundColor: 'transparent',
          boxShadow: '0px 0px 10px 0px rgb(255, 70, 1)',
          p: 2,
          borderTopRightRadius: 50,
          borderBottomLeftRadius: 50,
        }}
        >

          <CardMedia
            component="img"
            width="50%"
            image={ClassRoom}
            alt="green iguana"
          />
          <CardContent>
            <Typography textAlign="center" gutterBottom variant="h4" color="#fff" mt={2}>
              Classes
            </Typography>
            <Typography
              fontSize={12}
              fontWeight={100}
              color="#fff"
              mt={3}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
              }}
            >
              <Typography fontSize={12}>
                6,000
              </Typography>
              Class
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{
          backgroundColor: 'transparent',
          boxShadow: '0px 0px 10px 0px rgb(255, 70, 1)',
          p: 2,
          borderTopRightRadius: 50,
          borderBottomLeftRadius: 50,
        }}
        >

          <CardMedia
            component="img"
            width="50%"
            image={Time}
            alt="green iguana"
          />
          <CardContent>
            <Typography textAlign="center" gutterBottom variant="h4" color="#fff" mt={2}>
              Appointments
            </Typography>
            <Typography
              fontSize={12}
              fontWeight={100}
              color="#fff"
              mt={3}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
              }}
            >
              <Typography fontSize={12}>
                Check our
              </Typography>
              Time
            </Typography>
          </CardContent>
        </Card>

      </Box>

    </Box>

  </Box>

);

export default HomeClass;
