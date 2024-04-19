import { Button, Divider, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Language = () => {
  const { i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    handleClose();
  };

  return (
    <div>
      <Button
        variant="text"
        sx={{ borderRadius: "50px", textTransform: "none", color: "#F1A501" }}
        onClick={handleClick}
      >
        {i18n.language === "ru" ? (
          <>
            <img
              src="./images/Без названия.png"
              style={{ width: "20px", marginRight: 10 }}
              alt="russian flag"
            />
            <Typography>Русский</Typography>
          </>
        ) : i18n.language === "en" ? (
          <>
            <img
              src="./images/Без названия (1).png"
              style={{ width: "20px", marginRight: 10 }}
              alt="russian flag"
            />
            <Typography>English</Typography>
          </>
        ) : (
          <>
            <img
              src="./images/Без названия.jfif"
              style={{ width: "20px", marginRight: 10 }}
              alt="russian flag"
            />
            <Typography>Türkmençe</Typography>
          </>
        )}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuProps={{ disableScrollLock: false }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Divider>Languages :</Divider>
        <MenuItem onClick={() => changeLanguage("ru")}>
          <>
            <img
              src="./images/Без названия.png"
              style={{ width: "20px", marginRight: 10 }}
              alt="russian flag"
            />
            Русский
          </>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => changeLanguage("en")}>
          <>
            <img
              src="./images/Без названия (1).png"
              style={{ width: "20px", marginRight: 10 }}
              alt="english flag"
            />
            English
          </>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => changeLanguage("tm")}>
          <>
            <img
              src="./images/Без названия.jfif"
              style={{ width: "20px", marginRight: 10 }}
              alt="turkmen flag"
            />
            Türkmençe
          </>
        </MenuItem>
        <Divider />
      </Menu>
    </div>
  );
};

export default Language;
