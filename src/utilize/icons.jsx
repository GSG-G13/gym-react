import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import WcIcon from '@mui/icons-material/Wc';
import CakeIcon from '@mui/icons-material/Cake';
import HeightIcon from '@mui/icons-material/Height';
import ScaleIcon from '@mui/icons-material/Scale';
import EmailIcon from '@mui/icons-material/Email';

const userIcon = <PersonIcon sx={{ color: '#002B5B', marginLeft: '10px', fontSize: '20px' }} />;
const passwordIcon = <LockIcon sx={{ color: '#002B5B', marginLeft: '10px', fontSize: '20px' }} />;
const genderIcon = <WcIcon sx={{ color: '#002B5B', marginLeft: '10px', fontSize: '20px' }} />;
const birthDataIcon = <CakeIcon sx={{ color: '#002B5B', marginLeft: '10px', fontSize: '20px' }} />;
const heightIcon = <HeightIcon sx={{ color: '#002B5B', marginLeft: '10px', fontSize: '20px' }} />;
const weightIcon = <ScaleIcon sx={{ color: '#002B5B', marginLeft: '10px', fontSize: '20px' }} />;
const emailIcon = <EmailIcon sx={{ color: '#002B5B', marginLeft: '10px', fontSize: '20px' }} />;

export {
  userIcon, passwordIcon, weightIcon, heightIcon, birthDataIcon, genderIcon, emailIcon,
};
