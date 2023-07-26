const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'Title',
    editTable: false,
  },
  {
    field: 'Image',
  },
  {
    field: 'Price',
  },
  {
    field: 'Removing',
  },
];
const columns2 = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'className',
  },
  {
    field: 'status',
  },

];

const rows = [
  {
    id: 1, Title: 'Snow', Image: 'Jon', Price: 35, Removing: 'Remove',
  },
  {
    id: 2, Title: 'Lannister', Image: 'Cersei', Price: 42, Removing: 'Remove',
  },
  {
    id: 3, Title: 'Lannister', Image: 'Jaime', Price: 45, Removing: 'Remove',
  },
  {
    id: 4, Title: 'Stark', Image: 'Arya', Price: 16, Removing: 'Remove',
  },
  {
    id: 5, Title: 'Targaryen', Image: 'Daenerys', Price: null, Removing: 'Remove',
  },
  {
    id: 6, Title: 'Melisandre', Image: null, Price: 150, Removing: 'Remove',
  },
  {
    id: 7, Title: 'Clifford', Image: 'Ferrara', Price: 44, Removing: 'Remove',
  },
  {
    id: 8, Title: 'Frances', Image: 'Rossini', Price: 36, Removing: 'Remove',
  },
  {
    id: 9, Title: 'Roxie', Image: 'Harvey', Price: 65, Removing: 'Remove',
  },
];

export { rows, columns, columns2 };
