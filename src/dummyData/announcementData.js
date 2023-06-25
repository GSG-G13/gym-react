const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'classId',
    headerName: 'Class ID',
    width: 150,
    editable: true,
  },
  {
    field: 'className',
    headerName: 'Class Name',
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
    field: 'trainer',
    headerName: 'Trainer',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'string',
    width: 110,
    editable: true,
  },
  {
    field: 'participant',
    headerName: 'Participant',
    type: 'number',
    width: 110,
    editable: true,
  },
];

const rows = [
  {
    id: 1, classId: 'Snow', className: 'Jon@gmail.com', description: '123asd123', price: 20, participant: 'male',
  },
  {
    id: 2, classId: 'Snow', className: 'Jon@gmail.com', description: '123asd123', price: 20, participant: 'male',
  },
  {
    id: 3, classId: 'Snow', className: 'Jon@gmail.com', description: '123asd123', price: 20, participant: 'male',
  },
  {
    id: 4, classId: 'Snow', className: 'Jon@gmail.com', description: '123asd123', price: 20, participant: 'male',
  },
  {
    id: 5, classId: 'Snow', className: 'Jon@gmail.com', description: '123asd123', price: 20, participant: 'male',
  },
  {
    id: 6, classId: 'Snow', className: 'Jon@gmail.com', description: '123asd123', price: 20, participant: 'male',
  },
  {
    id: 7, classId: 'Snow', className: 'Jon@gmail.com', description: '123asd123', price: 20, participant: 'male',
  },
  {
    id: 8, classId: 'Snow', className: 'Jon@gmail.com', description: '123asd123', price: 20, participant: 'male',
  },
  {
    id: 9, classId: 'Snow', className: 'Jon@gmail.com', description: '123asd123', price: 20, participant: 'male',
  },
];

export { columns, rows };
