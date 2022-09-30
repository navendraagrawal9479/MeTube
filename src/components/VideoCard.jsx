import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { useSelector } from "react-redux";
import {
  demoChannelTitle,
  demoVideoTitle,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoUrl,
} from "../utils/constants";

const VideoCard = ({ video:{id:{videoId},snippet} }) => {
  const {darkMode} = useSelector(state=>state.darkMode)
  const backgroundColor = darkMode ? '#1e1e1e' : '#fff';
  const textColor = darkMode ? '#fff' : '#1e1e1e';
  // const id = video.id.videoId;
  // const snippet = video.snippet;
  // xs - xtra Small
  return <Card sx={{width:{md:'300px',xs:'340px'}}}> 
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{ width:{md:'300px',xs:'340px'}, height: {md:'170px',xs:'180px'} }}
      />
    </Link>
    <CardContent sx={{backgroundColor:backgroundColor,height:'106px'}}>
      {/* points to video link */}
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold" color={textColor}>
          {/* only display first 60 characters of the title 
          and if title not present then render demo title */}
          {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
        </Typography>
      </Link>
      {/* points to channel link */}
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
        <Typography variant="subtitle2" fontWeight="bold" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{fontSize:12, color:'gray' , ml:'5px', }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>;
};

export default VideoCard;
