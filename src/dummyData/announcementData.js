const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    type: 'string',
    width: 110,
    editable: true,
  },
  {
    field: 'image',
    headerName: 'Image',
    type: 'string',
    width: 110,
    editable: true,
  },
];

const rows = [
  {
    id: 1, title: 'Snow', description: '123asd123', image: 'image',
  },
  {
    id: 2, title: 'Snow', description: '123asd123', image: 'image',
  },
  {
    id: 3, title: 'Snow', description: '123asd123', image: 'image',
  },
  {
    id: 4, title: 'Snow', description: '123asd123', image: 'image',
  },
  {
    id: 5, title: 'Snow', description: '123asd123', image: 'image',
  },
  {
    id: 6, title: 'Snow', description: '123asd123', image: 'image',
  },
  {
    id: 7, title: 'Snow', description: '123asd123', image: 'image',
  },
  {
    id: 8, title: 'Snow', description: '123asd123', image: 'image',
  },
  {
    id: 9, title: 'Snow', description: '123asd123', image: 'image',
  },
];

export { columns, rows };
