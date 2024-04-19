import React from "react";
import { Grid } from "@mui/material";
const Flights = () => {
  return (
    <>
      <Grid container>
        <Grid direction="row" spacing={5}>
          <Grid item lg={6} md={6} sm={12} xs={12}></Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}></Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Flights;
