import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  Collapse, Divider, List, ListItem, ListItemText, ListSubheader, Typography,
} from '@mui/material';
import * as React from 'react';

const Statistic = () => {
  const [openUsers, setOpenUsers] = React.useState(true);
  const [openClasses, setOpenClasses] = React.useState(true);
  const [openProducts, setOpenProducts] = React.useState(true);

  const handleClickUsers = () => {
    setOpenUsers(!openUsers);
  };
  const handleClickClasses = () => {
    setOpenClasses(!openClasses);
  };
  const handleClickProducts = () => {
    setOpenProducts(!openProducts);
  };

  return (
    <List
      sx={{
        bgcolor: 'background.paper',
        border: '1px solid #ccc',
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={(
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{
            color: '#000',
            fontWeight: '600',
            fontSize: '0.90rem',
          }}
        >
          Statistics
        </ListSubheader>
      )}
    >
      <ListItem onClick={handleClickUsers}>
        <ListItemText
          disableTypography
          primary={<Typography variant="h5" fontWeight={600}>Users</Typography>}
        />
        {openUsers ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openUsers} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem>
            <ListItemText
              disableTypography
              primary={<Typography variant="h6" fontWeight={500}>Clients</Typography>}
            />
            <ListItemText
              disableTypography
              primary={<Typography variant="h6" fontWeight={500}>20.324</Typography>}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              disableTypography
              primary={<Typography variant="h6" fontWeight={500}>Trainers</Typography>}
            />
            <ListItemText
              disableTypography
              primary={<Typography variant="h6" fontWeight={500}>6</Typography>}
            />

          </ListItem>
        </List>
      </Collapse>

      <Divider />

      <ListItem onClick={handleClickClasses}>
        <ListItemText
          disableTypography
          primary={<Typography variant="h5" fontWeight={600}>Classes</Typography>}
        />
        {openClasses ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openClasses} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem>
            <ListItemText
              disableTypography
              primary={<Typography variant="h6" fontWeight={500}>Yoga</Typography>}
            />
            <ListItemText
              disableTypography
              primary={<Typography variant="h6" fontWeight={500}>20</Typography>}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              disableTypography
              primary={<Typography variant="h6" fontWeight={500}>Building</Typography>}
            />
            <ListItemText
              disableTypography
              primary={<Typography variant="h6" fontWeight={500}>30</Typography>}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              disableTypography
              primary={<Typography variant="h6" fontWeight={500}>Fitness</Typography>}
            />
            <ListItemText
              disableTypography
              primary={<Typography variant="h6" fontWeight={500}>45</Typography>}
            />
          </ListItem>
        </List>
      </Collapse>

      <Divider />

      <ListItem onClick={handleClickProducts}>
        <ListItemText
          disableTypography
          primary={<Typography variant="h5" fontWeight={600}>Products</Typography>}
        />
        {openProducts ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openProducts} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem>
            <ListItemText
              disableTypography
              primary={<Typography variant="h6" fontWeight={500}>Clothes</Typography>}
            />
            <ListItemText
              disableTypography
              primary={<Typography variant="h6" fontWeight={500}>60</Typography>}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              disableTypography
              primary={<Typography variant="h6" fontWeight={500}>Equipments</Typography>}
            />
            <ListItemText
              disableTypography
              primary={<Typography variant="h6" fontWeight={500}>45</Typography>}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              disableTypography
              primary={<Typography variant="h6" fontWeight={500}>Supplies</Typography>}
            />
            <ListItemText
              disableTypography
              primary={<Typography variant="h6" fontWeight={500}>130</Typography>}
            />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};

export default Statistic;
