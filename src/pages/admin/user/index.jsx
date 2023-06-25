import { columns, rows } from '../../../dummyData/classDashBoardDummyData';
import DashBoardLayOut from '../LayOut';

const userInfo = ['username', 'email', 'password', 'age', 'gender', 'gender', 'height', 'weight', 'goalweight'];

const UserList = () => (
  <DashBoardLayOut
    userInfo={userInfo}
    columns={columns}
    rows={rows}
  />
);

export default UserList;
