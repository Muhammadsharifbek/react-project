import React from "react"; // eslint-disable-line
import { Stack, Box } from "@mui/material"; // eslint-disable-line
import VideoCard from "../videoCard/videoCard"; // eslint-disable-line
import PropTypes from "prop-types"; // Import PropTypes
import ChannelCard from "../channel-card/channel-card";

function Videos({ videos }) {
  console.log("Kelgan videos:", videos); // Bu qatorni qo‘shing

  return (
    <Stack
      width={"100%"}
      direction={"row"}
      justifyContent={"start"}
      flexWrap={"wrap"}
      alignItems={"center"}
      gap={2}
    >
      {videos && videos.length > 0 ? (
        videos.map((item) => (
          <Box key={item.id.videoId}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard video={item} />}
          </Box>
        ))
      ) : (
        <p></p>
      )}
    </Stack>
  );
}

// Add PropTypes validation
Videos.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.shape({
        videoId: PropTypes.string.isRequired, // Validate videoId as a string
      }).isRequired,
      snippet: PropTypes.shape({
        title: PropTypes.string.isRequired, // Validate title as a string
      }).isRequired,
    })
  ).isRequired, // videos prop should be an array of objects with required properties
};

export default Videos;

{
  /* {videos.map((video) => (
        <div key={video.id}>
          <h3>{video.title}</h3>
          <p>{video.description}</p> 
        </div>
      ))}
        */
}
