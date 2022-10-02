import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";
import { useSelector } from "react-redux";

const ChannelCard = ({ channelDetail,marginTop }) => {
  const {darkMode} = useSelector(state=>state.darkMode)
  // const backgroundColor = darkMode ? '#1e1e1e' : '#fff';
  const textColor = darkMode ? '#fff' : '#1e1e1e';
  const subs = channelDetail?.statistics?.subscriberCount;
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width:{sm:'270px',md:'300px',xs:'340px'},
        mb:'15px', 
        mr:{sm:'15px'}
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: textColor,
            margin:'auto',
            marginTop
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6" sx={{ color: textColor }}>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {subs}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
