import React from "react";
import {
  Grid,
  Stack,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useTranslation } from "react-i18next";
import i18n from "../language/i18n.mjs";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      <Grid container alignItems="center" mt={5}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Stack spacing={3}>
            <Typography
              sx={{
                textTransform: "uppercase",
                color: "#DF6951",
                fontWeight: 700,
              }}
            >
              {t("homeSubtitle")}
            </Typography>
            <Typography
              sx={{
                color:
                  i18n.language === "en"
                    ? "#181E4B"
                    : i18n.language === "tm"
                    ? "red"
                    : "green",
                fontWeight: 800,
                width: i18n.language === "en" ? "90%" : "100%",
                fontSize: i18n.language === "en" ? "60px" : "40px",
              }}
            >
              {t("homeTitle")}
            </Typography>
            <Typography
              sx={{
                color: "#5E6282",
                width: "80%",
                fontSize: "16px",
              }}
            >
              {t("homeBottomSubtitle")}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={5}>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  background: "#F1A501",
                  borderRadius: "10px",
                  p: "15px 35px",
                  "&:hover": {
                    background: "#f1a501",
                  },
                }}
              >
                {t("homeBottomFind")}
              </Button>
              <Stack direction="row" alignItems="center" spacing={2}>
                <IconButton
                  sx={{
                    background: "#DF6951",
                    color: "#fff",
                    "&:hover": {
                      background: "#DF6951",
                    },
                  }}
                >
                  <PlayArrowIcon />
                </IconButton>
                <Typography>{t("homeIconPlay")}</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Box
            sx={{
              background: "url(./images/plane.png)",
              width: "100%",
              height: "80vh",
              backgroundRepeat: "no-repeat",
              backgroundSize: "23% 23%",
              backgroundPosition: "100px 30px",
            }}
          >
            <img
              src="./images/Traveller 1.png"
              style={{ width: "100%", zIndex: 100 }}
              alt=""
            />
            <Box
              sx={{
                background: "url(./images/plane.png)",
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "12% 12%",
                backgroundPosition: "right top",
                position: "absolute",
                right: "8%",
                top: "30%",
              }}
            ></Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Hero;
