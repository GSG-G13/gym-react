import { columns, rows } from '../../../dummyData/classDashBoardDummyData';
import DashBoardLayOut from '../LayOut';

const userInfo = ['classname', 'Description', 'Trainer', 'Price', 'Participant'];

const ClassDashBoard = () => (
  <DashBoardLayOut
    userInfo={userInfo}
    columns={columns}
    rows={rows}
  />
);

export default ClassDashBoard;
