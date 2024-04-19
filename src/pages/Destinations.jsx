import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import NearMeIcon from "@mui/icons-material/NearMe";

const Destinations = () => {
  return (
    <>
      <Container>
        <Typography align="center" mt={10}>
          Top Selling
        </Typography>
        <Typography variant="h3" mb={6} align="center">
          Top Destionations
        </Typography>
        <Grid container spacing={4} mb={5}>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Card
              sx={{
                borderRadius: "24px",
                width: "314px",
                background: "#fff",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="320"
                  image="./images/i.webp"
                  alt="green iguana"
                />
                <CardContent>
                  <Stack direction="row" mb={2} justifyContent="space-between">
                    <Typography>Rome, Italy</Typography>
                    <Typography>$5.42k</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <IconButton>
                      <NearMeIcon />
                    </IconButton>
                    <Typography>10 Days Trip</Typography>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Card
              sx={{
                borderRadius: "24px",
                width: "314px",
                background: "#fff",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="320"
                  image="./images/i (1).webp"
                  alt="green iguana"
                />
                <CardContent>
                  <Stack direction="row" mb={2} justifyContent="space-between">
                    <Typography>London, UK</Typography>
                    <Typography>$4.2k</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <IconButton>
                      <NearMeIcon />
                    </IconButton>
                    <Typography>10 Days Trip</Typography>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Stack direction="row" alignItems="center" spacing={-5}>
              <Card
                sx={{
                  borderRadius: "24px",
                  width: "314px",
                  background: "#fff",
                  zIndex: 100,
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="320"
                    image="./images/i (2).webp"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Stack
                      direction="row"
                      mb={2}
                      justifyContent="space-between"
                    >
                      <Typography>Rome, Italy</Typography>
                      <Typography>$5.42k</Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <IconButton>
                        <NearMeIcon />
                      </IconButton>
                      <Typography>10 Days Trip</Typography>
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
              <img
                src="./images/Decore (1).png"
                style={{ width: "96px", height: "252px" }}
                alt=""
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Destinations;
