import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
// import zIndex from "@mui/material/styles/zIndex";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    //fetching the details of the channel
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    //fetching the channel videos
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,98,121,1) 35%, rgba(0,212,255,1) 100%)",
            height: "250px",
            zIndex: 10,
          }}
        />
        <Box display="flex" flexDirection="column" alignItems="center">
          <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
        </Box>
        <Box
          display="flex"
          p={2}
        >
          <Box sx={{mr: {sm:'100px'}}} />
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
