import { userInfo, columns, rows } from '../../../dummyData/productData';
import DashBoardLayOut from '../LayOut';

const ProductListDashboard = () => (
  <DashBoardLayOut userInfo={userInfo} columns={columns} rows={rows} />
);

export default ProductListDashboard;
