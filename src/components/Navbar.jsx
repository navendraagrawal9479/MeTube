import React from "react";
import { Stack } from "@mui/system";
//stack is a wrapper element. Read the documentation
import { Link } from "react-router-dom";
import logo from "../logo.png";
import { SearchBar } from "../components";
import dark from "../dark.png";
import light from "../light.png";
// import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { toggleDark } from "../darkModeSlice";

const Navbar = () => {
  const { darkMode } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  const darkColor = '#000';
  const lightColor = '#fff';

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2} // p for padding
      sx={{
        position: "sticky",
        background: darkMode ? darkColor : lightColor,
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} /*px*/ />
      </Link>
      <SearchBar />
      <button
        className="dark-btn"
        onClick={() => {
          dispatch(toggleDark());
        }}
      >
        <img src={darkMode ? light :dark} />
      </button>
    </Stack>
  );
};

export default Navbar;
