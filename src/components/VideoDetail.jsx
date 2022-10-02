import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
// import { demoVideoDetails } from "../utils/constants";

import { Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useSelector } from "react-redux";

const VideoDetail = () => {
  const { id } = useParams();
  const { darkMode } = useSelector((state) => state.darkMode);
  const backgroundColor = darkMode ? "#000" : "#fff";
  const textColor = darkMode ? "#fff" : "#000";

  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  // console.log(videoDetail)

  useEffect(() => {
    //fetching the video
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetail(data.items[0]);
    });

    //fetching related videos
    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setRelatedVideos(data.items)
    );
  }, [id]);
  if (!videoDetail?.snippet) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "80px" }}>
            {/* //reactplayer simply plays a video when given a url */}
            <ReactPlayer
              url={`https://youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color={textColor} variant="h5" fontWeight="bold" ml={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: textColor }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant='h6'
                  color={textColor}
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack
                direction="row"
                gap="10px"
                alignItems="center"
                sx={{ color: textColor }}
              >
                <Typography variant="body1" sx={{ opacity: 0.8 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.8 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={relatedVideos} direction='column' />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
