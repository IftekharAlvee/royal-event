import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BookingListAdmin from './BookingListAdmin/BookingListAdmin';
import AddService from './AddService/AddService';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageServices from './ManageServices/ManageServices';
import { UserContext } from '../../App';


const Admin = () => {

const [loggedInUser, setLoggedInUser] = useContext(UserContext)

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(loggedInUser.adminStatus);

    return (
        <Container>
            <div className={classes.root}>
              <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                  <Tab label="Booking List" {...a11yProps(0)} />
                  <Tab label="Add Services" {...a11yProps(1)} />
                  <Tab label="Make Admin" {...a11yProps(2)} />
                  <Tab label="Manage Services" {...a11yProps(3)} />
                </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}>
                <BookingListAdmin></BookingListAdmin>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <AddService></AddService>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <MakeAdmin></MakeAdmin>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <ManageServices></ManageServices>
              </TabPanel>
          </div>
        </Container>
    );
};

export default Admin;