import { CheckCircle } from "@mui/icons-material";
import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";

function ChannelCard({ video }) {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
      }}
    >
      <CardMedia
        image={video.snippet.thumbnails.default.url}
        alt={video?.snippet?.title}
        sx={{
          borderRadius: "50%",
          width: "190px",
          height: "190px",

          mb: "2px",
          border: "1px solid #e3e3e3",
        }}
      />
      <Typography variant={"h6"}>
        {video?.snippet.title}{" "}
        <CheckCircle
          sx={{
            fontSize: "14px",
            textDecoration: "none",
            color: "gray",
            ml: "5px",
          }}
        />{" "}
      </Typography>
      {video?.statistics?.SubscriberCount && (
        <Typography variant={"h6"}>
          <CheckCircle
            sx={{ fontSize: "14px", color: "gray", fontWeight: "500" }}
          />{" "}
          {parseInt(video?.statistics?.SubscriberCount).toLocaleString(en - US)}
          Subsribers
        </Typography>
      )}
    </Box>
  );
}

export default ChannelCard;
