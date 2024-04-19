import React from "react";
import { Box, Stack, Container } from "@mui/material";
import { navLinks } from "../data/data.mjs";
import { Link } from "react-scroll";
import Hero from "./Hero";
import Services from "./Services";
import Language from "../language/Language";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box
        sx={{
          background: "url(./images/Decore.png)",
          width: "100%",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "45% 80%",
          backgroundPosition: "top right",
        }}
      >
        <Container>
          <Stack
            direction="row"
            height={"80px"}
            alignItems="center"
            justifyContent="space-between"
          >
            <img src="./images/Logo.png" alt="Logo" />
            <Stack direction="row" spacing={4} alignItems="center">
              {navLinks.map((item, i) => (
                <Link
                  key={`nav_links_key${i}`}
                  activeClass="active"
                  to={item.title}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={5}
                  duration={500}
                  delay={500}
                  spyThrottle={500}
                  style={{ textTransform: "capitalize", cursor: "pointer" }}
                >
                  {t(item.title)}
                </Link>
              ))}
              <Language />
            </Stack>
          </Stack>
          <Hero />
        </Container>
      </Box>
      <Services />
    </>
  );
};

export default Navbar;
