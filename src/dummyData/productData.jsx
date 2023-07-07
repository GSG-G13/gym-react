import DropDownList from '../components/dropDownList';

const userInfo = ['Title', 'Content', 'Price', 'Review', 'Setting'];

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
    renderCell: (row) => <DropDownList row={row} url="/api/products" />,
  },
];

export { userInfo, columns };
