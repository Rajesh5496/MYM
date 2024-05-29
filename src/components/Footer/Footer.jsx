import styles from "./Footer.module.css";
import React from "react";
import Typography from "@mui/material/Typography";

const Footer = () => (
  <footer className={styles.footer}>
    <a href="#" className={styles["footer-link"]}>
    About Us
      {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        About Us
      </Typography> */}
    </a>
    <a href="#" className={styles["footer-link"]}>
    Contact Us
    {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Contact Us
      </Typography> */}
    </a>
  </footer>
);

export default Footer;
