import DropDownList from '../components/dropDownList';

const userInfo = ['title', 'image', 'rating', 'price', 'description'];
const initialState = {
  title: '',
  image: '',
  rating: '',
  price: '',
  description: '',
};
const columns = [
  { field: '_id', headerName: 'id' },
  {
    field: 'title',
    headerName: 'Title',
  },
  {
    field: 'image',
    headerName: 'Image',
  },
  {
    field: 'rating',
    headerName: 'Rating',
  },
  {
    field: 'price',
    headerName: 'Price',
  },
  {
    field: 'description',
    headerName: 'Description',
  },
  {
    field: 'delete',
    headerName: 'Delete',
    width: 100,
    renderCell: (row) => <DropDownList userInfo={userInfo} initialState={initialState} row={row} url="/api/products" />,
  },
];

export { userInfo, columns };
