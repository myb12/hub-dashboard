import React from "react";

import { Grid } from "@mui/material";

import Card1 from "../../Components/Shared/Card1";

const WorkSpace = () => {
  return (
    <Grid container spacing={1.3}>
      <Grid item xs={6} md={2}>
        <Card1 />
      </Grid>
      <Grid item xs={6} md={2}>
        <h1>Hello</h1>
      </Grid>
      <Grid item xs={6} md={6}>
        <h1>Hello</h1>
      </Grid>
      <Grid item xs={6} md={2}>
        <h1>Hello</h1>
      </Grid>
    </Grid>
  );
};

export default WorkSpace;
