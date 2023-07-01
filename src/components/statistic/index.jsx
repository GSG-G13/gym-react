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
        bgcolor: 'background.paper', border: '1px solid #ccc', flex: 1, height: 'fit-content',
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={(
        <ListSubheader component="div" id="nested-list-subheader">
          Statistics
        </ListSubheader>
      )}
    >
      <ListItem onClick={handleClickUsers}>
        <ListItemText
          disableTypography
          primary={<Typography variant="h6">Users</Typography>}
        />
        {openUsers ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openUsers} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem>
            <ListItemText
              disableTypography
              primary={<Typography variant="h6">Clients</Typography>}
            />
            <ListItemText
              disableTypography
              primary={<Typography variant="h6">20.324</Typography>}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              disableTypography
              primary={<Typography variant="h6">Trainers</Typography>}
            />
            <ListItemText
              disableTypography
              primary={<Typography variant="h6">6</Typography>}
            />

          </ListItem>
        </List>
      </Collapse>

      <Divider />

      <ListItem onClick={handleClickClasses}>
        <ListItemText
          disableTypography
          primary={<Typography variant="h6">Classes</Typography>}
        />
        {openClasses ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openClasses} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem>
            <ListItemText
              disableTypography
              primary={<Typography variant="h6">Yoga</Typography>}
            />
            <ListItemText
              disableTypography
              primary={<Typography variant="h6">20</Typography>}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              disableTypography
              primary={<Typography variant="h6">Building</Typography>}
            />
            <ListItemText
              disableTypography
              primary={<Typography variant="h6">30</Typography>}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              disableTypography
              primary={<Typography variant="h6">Fitness</Typography>}
            />
            <ListItemText
              disableTypography
              primary={<Typography variant="h6">45</Typography>}
            />
          </ListItem>
        </List>
      </Collapse>

      <Divider />

      <ListItem onClick={handleClickProducts}>
        <ListItemText
          disableTypography
          primary={<Typography variant="h6">Products</Typography>}
        />
        {openProducts ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openProducts} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem>
            <ListItemText
              disableTypography
              primary={<Typography variant="h6">Clothes</Typography>}
            />
            <ListItemText
              disableTypography
              primary={<Typography variant="h6">60</Typography>}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              disableTypography
              primary={<Typography variant="h6">Equipments</Typography>}
            />
            <ListItemText
              disableTypography
              primary={<Typography variant="h6">45</Typography>}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              disableTypography
              primary={<Typography variant="h6">Supplies</Typography>}
            />
            <ListItemText
              disableTypography
              primary={<Typography variant="h6">130</Typography>}
            />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};

export default Statistic;
