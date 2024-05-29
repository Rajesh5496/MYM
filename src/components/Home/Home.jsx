import React from "react";
import styles from "./Home.module.css";
import home1 from "../../assets/home1.jpg";
import bg1 from "../../assets/bg1.jpg";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <section className={styles.section1}>
        <h3 className={styles["section1-title"]}>Why MYM?</h3>

        <div style={{ marginBottom: "40px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className={styles["slide-right1"]}>
              <h1 className={styles.sectionheading}>Personal Touch</h1>
            </div>
            <div className={styles["slide-left1"]}>
              <Box className={styles.box1}>
                MYM has members belonging to different income groups hence the
                plans are designed to cater all segments of society. We strive
                to provide a homely atmosphere to every member by understanding
                each one’s financial need and work towards making it a fruitful
                relationship.
              </Box>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className={styles["slide-right2"]}>
              <Box className={styles.box2}>
                MYM requires its family members to pay for its survival and not
                for huge profits. Hence we levy a charge of 1% to 2% of the
                principal amount to cater to all our expenses, book keeping,
                document maintenance, pay for any government fees and paper
                work, Salaries, etc…
              </Box>
            </div>
            <div className={styles["slide-left2"]}>
              <h1 className={styles.sectionheading}>
                Minimum Charges Maximum Benefits
              </h1>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className={styles["slide-right3"]}>
              <h1 className={styles.sectionheading}>No GST</h1>
            </div>

            <div className={styles["slide-left3"]}>
              <Box className={styles.box1}>
                We understand that is only a small savings or investment plan
                and do not want to impact you over and above your current tax
                payments. Hence the GST payable by you is again borne by MYM
                with a service motive on a condition that all the monthly
                payments has been made before 15th of every month.
              </Box>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className={styles["slide-right4"]}>
              <Box className={styles.box2}>
                MYM works out the plans keeping in mind all types of members
                with varied income levels, business needs, purpose of saving,
                time of money requirement, flexibility of payments and plan
                switching etc…
              </Box>
            </div>
            <div className={styles["slide-left4"]}>
              <h1 className={styles.sectionheading}>
                Plan that suits everyone’s need
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* <img src={home1} alt="home1" height={200} width={100}/> */}
    </>
  );
}
