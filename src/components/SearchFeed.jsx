import React, { useEffect, useState } from "react"; //useEffect is a lifecylce hook which is called when the app loads
import { Box, Typography } from "@mui/material";
import { Videos } from "../components";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const { darkMode } = useSelector((state) => state.darkMode);
  //selects the categories from the left sidebar
  const [videos, setVideos] = useState([]);
  const backgroundColor = darkMode ? "#000" : "#fff";
  const textColor = darkMode ? "#fff" : "#000";
  const { searchTerm } = useParams();

  //watches the change of selected category and updates the state and
  //again fetches the videos of the category selected through useEffect
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <Box
      m={1.5}
      sx={{
        overflowY: "auto",
        height: "90vh",
      }}
    >
      <Typography
        variant="h4"
        mb={2}
        fontWeight="bold"
        sx={{ color: textColor }}
      >
        Search Results For:{" "}
        <span style={{ color: "#3eccd9" }}>{searchTerm}</span> Videos
      </Typography>
      <Videos videos={videos}/>
    </Box>
  );
};

export default SearchFeed;
