import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Checkbox,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import MapIcon from "@mui/icons-material/Map";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import NearMeIcon from "@mui/icons-material/NearMe";
import ApartmentIcon from "@mui/icons-material/Apartment";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const Bookings = () => {
  return (
    <>
      <Container>
        <Grid
          id="bookings"
          container
          alignItems="center"
          spacing={10}
          mt={10}
          mb={10}
        >
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Stack spacing={2}>
              <Typography>Easy and Fast</Typography>
              <Typography>
                Book Your Next Trip <br />
                In 3 Easy Steps{" "}
              </Typography>
              <Stack direction="row" spacing={2}>
                <img src="./images/Group 7.png" alt="" />
                <Stack>
                  <Typography>Choose Destination</Typography>
                  <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem, iusto!
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction="row" spacing={2}>
                <img src="./images/Group 12.png" alt="" />
                <Stack>
                  <Typography>Choose Destination</Typography>
                  <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem, iusto!
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction="row" spacing={2}>
                <img src="./images/Group 11.png" alt="" />
                <Stack>
                  <Typography>Choose Destination</Typography>
                  <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem, iusto!
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Stack direction="row" spacing={-5}>
              <Card
                sx={{
                  borderRadius: "26px",
                  p: 3,
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="320"
                    image="./images/Rectangle 17.jpg"
                    alt="Rectangle 17"
                    sx={{ borderRadius: "26px" }}
                  />
                  <CardContent>
                    <Typography>Trip TO Greece</Typography>
                    <Typography>14-29 June | by Robbin join</Typography>
                    <Stack direction="row" spacing={2}>
                      <IconButton>
                        <EnergySavingsLeafIcon />
                      </IconButton>
                      <IconButton>
                        <MapIcon />
                      </IconButton>
                      <IconButton>
                        <NearMeIcon />
                      </IconButton>
                    </Stack>
                    <Stack
                      direction="row"
                      justifyContent={"space-between"}
                      alignItems="center"
                    >
                      <Stack direction="row" spacing={2} alignItems="center">
                        <IconButton>
                          <ApartmentIcon />
                        </IconButton>
                        <Typography>24 people going</Typography>
                      </Stack>
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite sx={{ color: "red" }} />}
                      />
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Box sx={{ position: "relative" }}>
                <Card
                  sx={{
                    width: "363px",
                    borderRadius: "18px",
                    height: "160px",
                    zIndex: 1000,
                    position: "absolute",
                    right: -120,
                    bottom: 100,
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Stack direction="row" spacing={2}>
                        <Avatar
                          alt="Remy Sharp"
                          src="./images/i.webp"
                          sx={{ width: 56, height: 56 }}
                        />
                        <Stack spacing={1}>
                          <Typography>Ongoing</Typography>
                          <Typography>Trip to rome</Typography>
                        </Stack>
                      </Stack>
                      <Stack spacing={1} ml={10} mt={3}>
                        <Typography>
                          <span style={{ color: "#8A79DF" }}>40%</span>completed
                        </Typography>
                        <BorderLinearProgress
                          variant="determinate"
                          value={50}
                        />
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Bookings;
