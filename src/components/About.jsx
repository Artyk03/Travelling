import React from "react";
import { Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const About = () => {
  return (
    <>
      <Container>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          style={{ width: "100%" }}
          // loop={true}
          speed={5000}
        >
          <SwiperSlide>
            <Grid container spacing={5}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Typography fontWeight={600}>TESTIMONIALS</Typography>
                <Typography variant="h3" lineHeight={"70px"} fontWeight={800}>
                  What People Say <br /> About Us
                </Typography>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Stack>
                  <Avatar
                    src="./images/Rectangle 17.jpg"
                    sx={{
                      width: "70px",
                      height: "70px",
                      zIndex: 10000,
                    }}
                  />

                  <Stack ml={4} mt={-2}>
                    <Stack>
                      <Box
                        sx={{
                          zIndex: 100,
                        }}
                      >
                        <Card sx={{ borderRadius: "10px", width: "504px" }}>
                          <CardActionArea>
                            <CardContent>
                              <Typography sx={{ lineHeight: "40px" }}>
                                “On the Windows talking painted pasture yet its
                                express parties use. Sure last upon he same as
                                knew next. Of believed or diverted no.”
                              </Typography>
                              <Typography mt={3} mb={2}>
                                Mike taylor
                              </Typography>
                              <Typography>Lahore , Pakistan</Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Box>
                    </Stack>
                    <Stack ml={10}>
                      <Box
                        sx={{
                          mt: -20,
                          zIndex: 10,
                        }}
                      >
                        <Card
                          sx={{ borderRadius: "10px", background: "#F7F7F7" }}
                        >
                          <CardActionArea>
                            <CardContent>
                              <Typography sx={{ lineHeight: "40px" }}>
                                “On the Windows talking painted pasture yet its
                                express parties use. Sure last upon he same as
                                knew next. Of believed or diverted no.”
                              </Typography>
                              <Typography mt={3} mb={2}>
                                Mike taylor
                              </Typography>
                              <Typography>Lahore , Pakistan</Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid container spacing={5}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Typography fontWeight={600}>TESTIMONIALS</Typography>
                <Typography variant="h3" lineHeight={"70px"} fontWeight={800}>
                  What People Say <br /> About Us
                </Typography>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Stack>
                  <Avatar
                    src="./images/Rectangle 17.jpg"
                    sx={{
                      width: "70px",
                      height: "70px",
                      zIndex: 10000,
                    }}
                  />

                  <Stack ml={4} mt={-2}>
                    <Stack>
                      <Box
                        sx={{
                          zIndex: 100,
                        }}
                      >
                        <Card sx={{ borderRadius: "10px", width: "504px" }}>
                          <CardActionArea>
                            <CardContent>
                              <Typography sx={{ lineHeight: "40px" }}>
                                “On the Windows talking painted pasture yet its
                                express parties use. Sure last upon he same as
                                knew next. Of believed or diverted no.”
                              </Typography>
                              <Typography mt={3} mb={2}>
                                Mike taylor
                              </Typography>
                              <Typography>Lahore , Pakistan</Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Box>
                    </Stack>
                    <Stack ml={10}>
                      <Box
                        sx={{
                          mt: -20,
                          zIndex: 10,
                        }}
                      >
                        <Card
                          sx={{ borderRadius: "10px", background: "#F7F7F7" }}
                        >
                          <CardActionArea>
                            <CardContent>
                              <Typography sx={{ lineHeight: "40px" }}>
                                “On the Windows talking painted pasture yet its
                                express parties use. Sure last upon he same as
                                knew next. Of believed or diverted no.”
                              </Typography>
                              <Typography mt={3} mb={2}>
                                Mike taylor
                              </Typography>
                              <Typography>Lahore , Pakistan</Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid container spacing={5}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Typography fontWeight={600}>TESTIMONIALS</Typography>
                <Typography variant="h3" lineHeight={"70px"} fontWeight={800}>
                  What People Say <br /> About Us
                </Typography>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Stack>
                  <Avatar
                    src="./images/Rectangle 17.jpg"
                    sx={{
                      width: "70px",
                      height: "70px",
                      zIndex: 10000,
                    }}
                  />

                  <Stack ml={4} mt={-2}>
                    <Stack>
                      <Box
                        sx={{
                          zIndex: 100,
                        }}
                      >
                        <Card sx={{ borderRadius: "10px", width: "504px" }}>
                          <CardActionArea>
                            <CardContent>
                              <Typography sx={{ lineHeight: "40px" }}>
                                “On the Windows talking painted pasture yet its
                                express parties use. Sure last upon he same as
                                knew next. Of believed or diverted no.”
                              </Typography>
                              <Typography mt={3} mb={2}>
                                Mike taylor
                              </Typography>
                              <Typography>Lahore , Pakistan</Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Box>
                    </Stack>
                    <Stack ml={10}>
                      <Box
                        sx={{
                          mt: -20,
                          zIndex: 10,
                        }}
                      >
                        <Card
                          sx={{ borderRadius: "10px", background: "#F7F7F7" }}
                        >
                          <CardActionArea>
                            <CardContent>
                              <Typography sx={{ lineHeight: "40px" }}>
                                “On the Windows talking painted pasture yet its
                                express parties use. Sure last upon he same as
                                knew next. Of believed or diverted no.”
                              </Typography>
                              <Typography mt={3} mb={2}>
                                Mike taylor
                              </Typography>
                              <Typography>Lahore , Pakistan</Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </SwiperSlide>
        </Swiper>
        <Stack direction="row" mt={20} alignItems="center" spacing={2}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
            }}
            slidesPerView={5}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            style={{ width: "100%" }}
            loop={true}
            speed={5000}
          >
            <SwiperSlide>
              <Box
                sx={{
                  width: "241px",
                  height: "86px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  "&:hover": {
                    background: "#fff",
                  },
                }}
              >
                <img
                  src="./images/image 27.png"
                  style={{ width: "80%" }}
                  alt=""
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                sx={{
                  width: "241px",
                  height: "86px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  "&:hover": {
                    background: "#fff",
                  },
                }}
              >
                <img
                  src="./images/image 28.png"
                  style={{ width: "90%" }}
                  alt=""
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                sx={{
                  width: "241px",
                  height: "86px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  "&:hover": {
                    background: "#fff",
                  },
                }}
              >
                <img
                  src="./images/image 30.png"
                  style={{ width: "90%" }}
                  alt=""
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                sx={{
                  width: "241px",
                  height: "86px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  "&:hover": {
                    background: "#fff",
                  },
                }}
              >
                <img
                  src="./images/image 31.png"
                  style={{ width: "90%" }}
                  alt=""
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                sx={{
                  width: "241px",
                  height: "86px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  "&:hover": {
                    background: "#fff",
                  },
                }}
              >
                <img
                  src="./images/image 27.png"
                  style={{ width: "90%" }}
                  alt=""
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                sx={{
                  width: "241px",
                  height: "86px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  "&:hover": {
                    background: "#fff",
                  },
                }}
              >
                <img
                  src="./images/image 30.png"
                  style={{ width: "90%" }}
                  alt=""
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                sx={{
                  width: "241px",
                  height: "86px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  "&:hover": {
                    background: "#fff",
                  },
                }}
              >
                <img
                  src="./images/image 31.png"
                  style={{ width: "90%" }}
                  alt=""
                />
              </Box>
            </SwiperSlide>
          </Swiper>
        </Stack>
      </Container>
    </>
  );
};

export default About;
