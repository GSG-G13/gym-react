const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'classname',
    headerName: 'classname',
    width: 150,
    editable: true,
  },
  {
    field: 'Description',
    headerName: 'Description',
    width: 150,
    editable: true,
  },
  {
    field: 'Trainer',
    headerName: 'Trainer',
    type: 'string',
    width: 110,
    editable: true,
  },
  {
    field: 'Price',
    headerName: 'Price',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'Participant',
    headerName: 'Participant',
    type: 'number',
    width: 110,
    editable: true,
  },
];

const rows = [
  {
    id: 1, classname: 'Snow', Description: 'Jon@gmail.com', Trainer: 'john', Price: 20, Participant: 20,
  },
  {
    id: 2, classname: 'Snow', Description: 'Jon@gmail.com', Trainer: 'john', Price: 20, Participant: 20,
  },
  {
    id: 3, classname: 'Snow', Description: 'Jon@gmail.com', Trainer: 'john', Price: 20, Participant: 20,
  },
  {
    id: 4, classname: 'Snow', Description: 'Jon@gmail.com', Trainer: 'john', Price: 20, Participant: 20,
  },
  {
    id: 5, classname: 'Snow', Description: 'Jon@gmail.com', Trainer: 'john', Price: 20, Participant: 20,
  },
  {
    id: 6, classname: 'Snow', Description: 'Jon@gmail.com', Trainer: 'john', Price: 20, Participant: 20,
  },
  {
    id: 7, classname: 'Snow', Description: 'Jon@gmail.com', Trainer: '123asd123', Price: 20, Participant: 'male',
  },
  {
    id: 8, classname: 'Snow', Description: 'Jon@gmail.com', Trainer: '123asd123', Price: 20, Participant: 'male',
  },
  {
    id: 9, classname: 'Snow', Description: 'Jon@gmail.com', Trainer: '123asd123', Price: 20, Participant: 'male',
  },
];

export { columns, rows };
