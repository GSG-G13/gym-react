import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  Collapse, Divider, List, ListItem, ListItemText, ListSubheader, Typography,
} from '@mui/material';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const Statistic = () => {
  const [users, classes, subs, products, categories, trainers] = useOutletContext();
  const [openUsers, setOpenUsers] = useState(true);
  const [openClasses, setOpenClasses] = useState(true);
  const [openProducts, setOpenProducts] = useState(true);
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
              primary={<Typography variant="h6" fontWeight={500}>{users.length}</Typography>}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              disableTypography
              primary={<Typography variant="h6" fontWeight={500}>Trainers</Typography>}
            />
            <ListItemText
              disableTypography
              primary={<Typography variant="h6" fontWeight={500}>{trainers.length}</Typography>}
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

          {classes.map((item) => (
            <ListItem>
              <ListItemText
                disableTypography
                primary={<Typography variant="h6" fontWeight={500}>{item.className}</Typography>}
              />
              <ListItemText
                disableTypography
                primary={(
                  <Typography variant="h6" fontWeight={500}>
                    {
                      subs.filter((sub) => sub.classId.className === item.className).length

                    }
                  </Typography>
                )}
              />
            </ListItem>
          ))}

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
          {categories.map((cata) => (
            <ListItem>
              <ListItemText
                disableTypography
                primary={<Typography variant="h6" fontWeight={500}>{cata.categoryName}</Typography>}
              />
              <ListItemText
                disableTypography
                primary={(
                  <Typography variant="h6" fontWeight={500}>
                    {
                      products.filter((prod) => prod.categoryId?.categoryName === cata.categoryName)
                        .length
                    }
                  </Typography>
                )}
              />
            </ListItem>
          ))}

        </List>
      </Collapse>
    </List>
  );
};

export default Statistic;
