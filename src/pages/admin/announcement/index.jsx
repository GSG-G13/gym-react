import { columns, rows } from '../../../dummyData/announcementData';
import DashBoardLayOut from '../LayOut';

const userInfo = ['Title', 'Description', 'Image'];

const AnnouncementDashboard = () => (
  <DashBoardLayOut columns={columns} rows={rows} userInfo={userInfo} />
);

export default AnnouncementDashboard;
