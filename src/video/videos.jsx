import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "../videoCard/videoCard";

function Videos({ videos }) {
  console.log("Kelgan videos:", videos); // Bu qatorni qo‘shing

  if (!videos || videos.length === 0) {
    return <div>Video topilmadi.</div>;
  }
  <div>Video</div>;
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      justifyContent={"start"}
      flexWrap={"wrap"}
      alignItems={"center"}
      gap={"2"}
    >
      <div>
        {videos && videos.length > 0 ? (
          <div>
            {videos.map((item) => (
              <div key={item.id.videoId}>
                <h3>{item.snippet.title}</h3>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {/* {videos.map((item) => (
        <Box key={item.id.videoId}>
          {item.id.videoId && <VideoCard video={item} />}
        </Box>
      ))} */}
      {/* {videos && videos.length > 0 ? (
        videos.map((item) => (
          <Box key={item.id.videoId}>
            {item.id.videoId && <VideoCard video={item} />}
          </Box>
        ))
      ) : (
        <div>Video topilmadi.</div>
      )} */}
    </Stack>
  );
}

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
