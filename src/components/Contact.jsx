import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import MailIcon from "@mui/icons-material/Mail";

const Contact = () => {
  return (
    <>
      <Container>
        <Box sx={{ position: "relative", width: "100%" }}>
          <IconButton
            sx={{
              position: "absolute",
              top: -20,
              ml: 10,
              right: -20,
              background: "#747DEF",
              color: "#fff",
              "&:hover": { background: "#5E3BE1" },
            }}
          >
            <TelegramIcon />
          </IconButton>
        </Box>
        <Box sx={{ position: "relative" }} zIndex={10}>
          <img
            style={{
              position: "absolute",
              right: 0,
              width: "200px",
              opacity: 0.2,
            }}
            src="./images/Group 42.png"
            alt="Group 42 (1)"
          />
        </Box>
        <Box
          sx={{
            background: "#DFD7F9",
            width: "100%",
            padding: "40px",
            mb: 20,
            borderRadius: "50px 10px 10px 10px",
          }}
        >
          <Stack direction="row" justifyContent="center">
            <Typography
              textAlign="center"
              variant="h4"
              fontWeight={700}
              color={"#5E6282"}
              lineHeight={2}
            >
              Subscribe to get information, latest news and other <br />
              interesting offers about Jadoo
            </Typography>
          </Stack>
          <Stack
            mt={10}
            mb={8}
            direction={"row"}
            spacing={5}
            justifyContent={"center"}
          >
            <TextField
              sx={{
                background: "#fff",
                borderRadius: "12px",
                "& fieldset": { border: "none" },
                width: "421px",
                zIndex: 1000,
              }}
              placeholder="Your Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              sx={{
                width: "180px",
                textTransform: "none",
                color: "#fff",
                background: "#FF946D",
                "&:hover": { background: "#FF7D68" },
              }}
            >
              Subscribe
            </Button>
          </Stack>
        </Box>
        <Box sx={{ position: "relative" }} zIndex={10}>
          <img
            style={{
              position: "absolute",
              top: -380,
              width: "300px",
              opacity: 0.2,
            }}
            src="./images/Group 42 (1).png"
            alt="Group 42 (1)"
          />
        </Box>
        <Box sx={{ position: "relative" }} zIndex={10}>
          <img
            style={{
              position: "absolute",
              top: -250,
              width: "153px",
              right: -100,
            }}
            src="./images/Group 5.png"
            alt="Group 42 (1)"
          />
        </Box>
      </Container>
    </>
  );
};

export default Contact;
