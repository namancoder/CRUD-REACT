import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

//import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
//import makeStyles from "@material-ui/core/styles/makeStyles";
// const useStyles = makeStyles({
//   header: {
//     backgroundColor: "#460ccc",
//   },
// });
const NavBar = () => {
  // const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <NavLink
          to="./add"
          style={{
            marginRight: 20,
            textDecoration: "none",
            fontSize: 20,
            color: "#FFFFFF",
          }}
        >
          Add Contact
        </NavLink>
        <NavLink
          to="./"
          style={{
            marginRight: 20,
            textDecoration: "none",
            fontSize: 20,
            color: "#FFFFFF",
          }}
        >
          {" "}
          Read Contacts
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
