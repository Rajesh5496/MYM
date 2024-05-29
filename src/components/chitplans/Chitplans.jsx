import React from "react";
import styles from "./Chitplans.module.css";
import { Box } from "@mui/material";
import {
  CircularProgress,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Color } from "aws-cdk-lib/aws-cloudwatch";

export default function Chitplans() {
  return (
    <>
      <section className={styles.section1}>
        <div>
          <h2 class="sec-title" style={{ color: 'white'}}>
            Please contact branch for further information.
          </h2>
          {/* <div className={styles.container}> */}
          <Grid container spacing={2} marginY={2} paddingX={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box className={styles.box1}>
                <div class="chit-single">
                  <div class="chit-price">₹ 5,00,000</div>
                  <div class="chit-saving">₹ 10,000/month for 50 months</div>
                  <div class="chit-duration">
                    <i class="fa-regular fa-clock me-2"></i>Start date: 28 May,
                    2024
                  </div>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box className={styles.box1}>
                <div class="chit-single">
                  <div class="chit-price">₹ 5,00,000</div>
                  <div class="chit-saving">₹ 10,000/month for 50 months</div>
                  <div class="chit-duration">
                    <i class="fa-regular fa-clock me-2"></i>Start date: 28 May,
                    2024
                  </div>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box className={styles.box1}>
                <div class="chit-single">
                  <div class="chit-price">₹ 5,00,000</div>
                  <div class="chit-saving">₹ 10,000/month for 50 months</div>
                  <div class="chit-duration">
                    <i class="fa-regular fa-clock me-2"></i>Start date: 28 May,
                    2024
                  </div>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box className={styles.box1}>
                <div class="chit-single">
                  <div class="chit-price">₹ 5,00,000</div>
                  <div class="chit-saving">₹ 10,000/month for 50 months</div>
                  <div class="chit-duration">
                    <i class="fa-regular fa-clock me-2"></i>Start date: 28 May,
                    2024
                  </div>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box className={styles.box1}>
                <div class="chit-single">
                  <div class="chit-price">₹ 5,00,000</div>
                  <div class="chit-saving">₹ 10,000/month for 50 months</div>
                  <div class="chit-duration">
                    <i class="fa-regular fa-clock me-2"></i>Start date: 28 May,
                    2024
                  </div>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box className={styles.box1}>
                <div class="chit-single">
                  <div class="chit-price">₹ 5,00,000</div>
                  <div class="chit-saving">₹ 10,000/month for 50 months</div>
                  <div class="chit-duration">
                    <i class="fa-regular fa-clock me-2"></i>Start date: 28 May,
                    2024
                  </div>
                </div>
              </Box>
            </Grid>
          </Grid>
          {/* </div> */}
        </div>
      </section>
    </>
  );
}
