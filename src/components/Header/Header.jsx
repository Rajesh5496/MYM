import * as React from "react";
import styles from "./Header.module.css";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import Link from "@material-ui/core/Link";
import { Outlet, Link } from "react-router-dom";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* The Typography component applies 
					default font weights and sizes */}

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          color="white"
        >
          MYM
        </Typography>

        <Link className={styles["header-link"]} to="/home">
          Home
        </Link>

        <Link className={styles["header-link"]} to="/chitplans">
          Chit Plans
        </Link>

        <Link className={styles["header-link"]} to="/generalinfo">
          General Info
        </Link>

        <Link className={styles["header-link"]} to="/chitplans">
          About Us
        </Link>
      </Toolbar>
    </AppBar>
  );
}
