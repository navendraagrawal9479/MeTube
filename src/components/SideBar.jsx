import React from "react";
import { Stack } from "@mui/system";
import { useSelector } from "react-redux";
import { categories } from "../utils/constants";
import { Button } from "@mui/material";

const SideBar = ({selectedCategory,setSelectedCategory}) => {
  const { darkMode } = useSelector((state) => state.darkMode);
  const backgroundColor = darkMode ? '#000' : '#fff';
  const color = darkMode ? '#fff' : '#000';
  
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button 
          key={category.id}
          className="category-btn"
          onClick={()=>{setSelectedCategory(category.name)}}
          style={{
            background: category.name === selectedCategory ? "#13abb8" :backgroundColor,
            color: color,
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? '#000' : "#3eccd9",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.75",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
