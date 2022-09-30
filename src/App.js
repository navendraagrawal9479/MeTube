import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";

//importing from index.js in components
import {Feed, Navbar, VideoDetail, ChannelDetail, SearchFeed} from "./components"

const App = () => {
  const {darkMode} = useSelector(state=>state.darkMode)
  const backgroundColor = darkMode ? '#000' : '#fff';
  const textColor = darkMode ? '#fff' : '#000';

  return (
    <BrowserRouter>
      {/* sx attribute defines some inline style in the Box */}
      {/* Box is a div type of element in material ui */}
      <Box sx={{ backgroundColor: backgroundColor }}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
