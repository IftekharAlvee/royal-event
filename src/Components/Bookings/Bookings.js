import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Container } from "react-bootstrap";
import Book from "./Book/Book";
import BookingList from "./BookingList/BookingList";
import Review from "./Review/Review";

const Bookings = () => {

  const TabPanel = (props) => {
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
  };

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));

  //   export default function SimpleTabs() {
  //     const classes = useStyles();
  //     const [value, setValue] = React.useState(0);

  //     const handleChange = (event, newValue) => {
  //       setValue(newValue);
  //     };

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
        <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Book" {...a11yProps(0)} />
          <Tab label="Booking list" {...a11yProps(1)} />
          {/* <Tab label="Review" {...a11yProps(2)} /> */}
        </Tabs>
      </AppBar>
      {/* <TabPanel value={value} index={0}>
        <Book></Book>
      </TabPanel> */}
      <TabPanel value={value} index={0}>
        <BookingList></BookingList>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Review></Review>
      </TabPanel>
    </div>
    </Container>
  );
};

export default Bookings;
