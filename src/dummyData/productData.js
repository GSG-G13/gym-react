const userInfo = ['title', 'content', 'price', 'review', 'setting'];

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'productId',
    headerName: 'productId',
    width: 150,
    editable: true,
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
    editable: true,
  },
  {
    field: 'content',
    headerName: 'Content',
    type: 'string',
    width: 110,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 160,
    type: 'number',
    editable: true,

  },
  {
    field: 'review',
    headerName: 'Review',
    width: 160,
    type: 'number',
    editable: true,

  },

];

const rows = [
  {
    id: 1, productId: 1, title: 'Snow', content: 'Jon', price: 35, review: 4,
  },
  {
    id: 2, productId: 1, title: 'Lannister', content: 'Cersei', price: 42, review: 4,
  },
  {
    id: 3, productId: 1, title: 'Lannister', content: 'Jaime', price: 45, review: 4,
  },
  {
    id: 4, productId: 1, title: 'Stark', content: 'Arya', price: 16, review: 4,
  },
  {
    id: 5, productId: 1, title: 'Targaryen', content: 'Daenerys', price: 29, review: 4,
  },
  {
    id: 6, productId: 1, title: 'Melisandre', content: null, price: 150, review: 4,
  },
  {
    id: 7, productId: 1, title: 'Clifford', content: 'Ferrara', price: 44, review: 4,
  },
  {
    id: 8, productId: 1, title: 'Frances', content: 'Rossini', price: 36, review: 4,
  },
  {
    id: 9, productId: 1, title: 'Roxie', content: 'Harvey', price: 65, review: 4,
  },
];

export { userInfo, columns, rows };
