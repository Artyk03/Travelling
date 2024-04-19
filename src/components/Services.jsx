import { Language } from "@mui/icons-material";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <Box>
          <img
            src="./images/Group 4.png"
            alt=""
            style={{ float: "right", width: "153px", height: "166px" }}
          />
        </Box>
        <Typography
          variant="h5"
          textTransform="uppercase"
          fontWeight={700}
          align="center"
        >
          category
        </Typography>
        <Typography
          variant="h2"
          textTransform="uppercase"
          fontWeight={700}
          align="center"
        >
          {t("servicesTitle")}
        </Typography>
        <Grid container spacing={5} mb={5} mt={5}>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Box
              sx={{
                width: "267px",
                padding: "20px 10px",
                borderRadius: "36px",
                transition: "0.7s",
                cursor: "pointer",
                "&:hover": {
                  boxShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                },
              }}
            >
              <Stack spacing={2}>
                <Stack alignItems="center">
                  <img
                    style={{ width: "92px" }}
                    src="./images/Group 48.png"
                    alt="Group 48.png"
                  />
                </Stack>
                <Typography align="center">Calculated Weather</Typography>
                <Stack pl={3}>
                  <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa architecto quasi
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Box
              sx={{
                width: "267px",
                padding: "20px 10px",
                borderRadius: "36px",
                transition: "0.7s",
                cursor: "pointer",
                "&:hover": {
                  boxShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                },
              }}
            >
              <Stack spacing={2}>
                <Stack alignItems="center">
                  <img
                    style={{ width: "92px" }}
                    src="./images/Group 48.png"
                    alt="Group 48.png"
                  />
                </Stack>
                <Typography align="center">Calculated Weather</Typography>
                <Stack pl={3}>
                  <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa architecto quasi
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Box
              sx={{
                width: "267px",
                padding: "20px 10px",
                borderRadius: "36px",
                transition: "0.7s",
                cursor: "pointer",
                "&:hover": {
                  boxShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                },
              }}
            >
              <Stack spacing={2}>
                <Stack alignItems="center">
                  <img
                    style={{ width: "92px" }}
                    src="./images/Group 48.png"
                    alt="Group 48.png"
                  />
                </Stack>
                <Typography align="center">Calculated Weather</Typography>
                <Stack pl={3}>
                  <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa architecto quasi
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Box
              sx={{
                width: "267px",
                padding: "20px 10px",
                borderRadius: "36px",
                transition: "0.7s",
                cursor: "pointer",
                "&:hover": {
                  boxShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                },
              }}
            >
              <Stack spacing={2}>
                <Stack alignItems="center">
                  <img
                    style={{ width: "92px" }}
                    src="./images/Group 48.png"
                    alt="Group 48.png"
                  />
                </Stack>
                <Typography align="center">Calculated Weather</Typography>
                <Stack pl={3}>
                  <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa architecto quasi
                  </Typography>
                  <Language />
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Services;
