import React, { useEffect, useState } from "react"; //useEffect is a lifecylce hook which is called when the app loads
import { Stack, Box, Typography } from "@mui/material";
import { SideBar, Videos } from "../components";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useSelector } from "react-redux";

const Feed = () => {
  const {darkMode} = useSelector(state=>state.darkMode)
  //selects the categories from the left sidebar
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  // const backgroundColor = darkMode ? '#000' : '#fff';
  const textColor = darkMode ? '#fff' : '#000';

  //watches the change of selected category and updates the state and
  //again fetches the videos of the category selected through useEffect
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    //flex direction should be column in general and row for medium devices and above
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          //to change the categories in SideBar component
        />

      </Box>
      <Box m={1} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          mb={2}
          fontWeight="bold"
          sx={{ color: textColor }}
        >
          {selectedCategory} <span style={{ color: "#3eccd9" }}>Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  );
};

export default Feed;
