import React from "react";
import styles from "./Generalinfo.module.css";
import { Box, Typography } from "@mui/material";

export default function Generalinfo() {
  return (
    <>
      <section className={styles.section1}>
        <Box>
          <h2 className={styles["section1-title"]}>What is a Chit fund</h2>
          <Typography>
            <p>
              A chit fund is a historically prevalent form of savings scheme for
              the people who are looking for higher returns on their investments
              and help themselves at the time of need without having to request
              someone or pull a loan from the bank following the tedious
              procedures.{" "}
            </p>
            <p>
              Mutual trust and respect are what keeps this set up alive and
              making each one rewarding and inspiring for themselves. Chit fund
              usually runs on a short-term basis and long-term basis as well
              suiting everyone’s purpose and requirement.{" "}
            </p>
            <p>
              “Chit means a transaction whether called chit, chit fund, chitty,
              kuree or by any other name by or under which a person enters into
              an agreement with a specified number of persons that every one of
              them shall subscribe a certain sum of money (or a certain quantity
              of grain instead) by way of periodical installments over a
              definite period and that each such subscriber shall, in his turn,
              as determined by lot or by auction or by tender or in such other
              manner as may be specified in the chit agreement, be entitled to
              the prize amount”
            </p>
          </Typography>
          
          <br/>
          <h2 className={styles["section1-title"]}>Why Chit fund?</h2>
          
          <p>
            CHIT provides a good source of finance for different type of people
            viz., small investors, businessmen, small scale industrialists etc.
          </p>
          <p>
            <b>
              A Chit is the Only Financial Product that allows you to Save and
              Borrow.
            </b>
            The non prized subscriber who is a saving member up to the last
            installments gets dividend which is comparatively higher than the
            interest that are accrued by way of Recurring Deposit Schemes.
          </p>
          <p>
            The purpose of drawing the prized amount need not be disclosed. It
            can be used for any need by the member
          </p>
        </Box>
      </section>
    </>
  );
}
