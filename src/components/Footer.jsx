import { Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <>
      <Container>
        <Grid container spacing={4} mb={5}>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Stack spacing={1}>
              <Typography variant="h3" fontWeight={600}>
                Jadoo.
              </Typography>
              <Typography lineHeight={2}>
                Book your trip in minute, get full <br /> Control for much
                longer.
              </Typography>
            </Stack>
          </Grid>
          <Grid item lg={2} md={4} sm={6} xs={12}>
            <Stack spacing={1}>
              <Typography variant="h5" fontWeight={600}>
                Company
              </Typography>
              <Typography pt={3}>About</Typography>
              <Typography>Careers</Typography>
              <Typography>Mobile</Typography>
            </Stack>
          </Grid>
          <Grid item lg={2} md={4} sm={6} xs={12}>
            <Stack spacing={1}>
              <Typography variant="h5" fontWeight={600}>
                Company
              </Typography>
              <Typography pt={3}>About</Typography>
              <Typography>Careers</Typography>
              <Typography>Mobile</Typography>
            </Stack>
          </Grid>
          <Grid item lg={2} md={4} sm={6} xs={12}>
            <Stack spacing={1}>
              <Typography variant="h5" fontWeight={600}>
                Company
              </Typography>
              <Typography pt={3}>About</Typography>
              <Typography>Careers</Typography>
              <Typography>Mobile</Typography>
            </Stack>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Stack spacing={3}>
              <Stack direction="row" alignItems={"center"} spacing={2}>
                <IconButton
                  sx={{
                    background: "#fff",
                    width: "50px",
                    height: "50px",
                    color: "#000",
                    fontWeight: 700,
                  }}
                >
                  f
                </IconButton>
                <img
                  style={{ width: "70px", height: "70px" }}
                  src="./images/Social.png"
                  alt=""
                />
                <IconButton
                  sx={{
                    background: "#fff",
                    width: "50px",
                    height: "50px",
                    color: "#000",
                  }}
                >
                  <TwitterIcon />
                </IconButton>
              </Stack>
              <Typography>Discover our app</Typography>
              <Stack direction="row" spacing={3}>
                <img
                  style={{ cursor: "pointer" }}
                  src="./images/Google Play.png"
                  alt=""
                />
                <img
                  style={{ cursor: "pointer" }}
                  src="./images/Play Store.png"
                  alt=""
                />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Footer;
