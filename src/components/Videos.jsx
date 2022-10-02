import React from "react";
import { Stack, Box } from "@mui/system";
import {VideoCard,ChannelCard} from "./"
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Videos = ({ videos,direction}) => {
  const {darkMode} = useSelector(state=>state.darkMode)
  // const backgroundColor = darkMode ? '#000' : '#fff';
  const textColor = darkMode ? '#fff' : '#000';
  if(!videos?.length)return <Typography sx={{color:textColor}}>Loading...</Typography>

  return (
    //stack is used when we want to use flex box
    <Stack direction={{xs:'row',md:direction}} flexWrap="wrap" justifyContent="center">
      {videos.map((item, index) => (
        //we first want the channel link in case we fetch a channel videos
        //so check if the item is a channel or video item
        <Box key={index}>
            {/* //if it has video id then it is a video else it is a channel*/}
            {item.id.videoId && <VideoCard video = {item}/>}
            {item.id.channelId && <ChannelCard channelDetail = {item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
