// import React from "react";
// import moment from "moment";
// import { CheckCircle } from "@mui/icons-material";
// import colors from "../constans/colors";
// import { Avatar, CardContent, CardMedia, Card, Stack } from "@mui/material";
// import { Typography } from "@mui/material";

// const VideoCard = ({ video }) => {
//   return (
//     (<Card sx={{ width: "320", boxShadow: "none", borderRadius: 0 }} />),
//     (
//       <CardMedia
//         image={video?.snippet?.thumbnails?.default?.url}
//         alt={video?.snippet?.title}
//         sx={{ width: "360px", height: "180px" }}
//       />
//     ),
//     (
//       <CardContent
//         sx={{
//           background: colors.primary,
//           height: "200px",
//           position: "relative",
//         }}
//       />
//     ),
//     ((
//       <>
//         <Typography my={"5x"} sx={{ opacity: ".3" }}>
//           {video?.snippet?.publishedAt
//             ? moment(video.snippet.publishedAt).fromNow()
//             : "No date available"}
//         </Typography>
//         <Typography variant="subtitle" fontWeight={"bold"}>
//           {video?.snippet?.title.slice(0, 50)}
//         </Typography>
//         <Typography variant="subtitle2" sx={{ opacity: ",6" }}>
//           {video?.snippet?.description.slice(0, 70)}
//         </Typography>
//       </>
//     ),
//     (
//       <>
//         <Stack
//           direction={"row"}
//           position={"absolute"}
//           bottom={"10px"}
//           alignItems={"center"}
//           gap={"5px"}
//         >
//           <Avatar src={video?.snippet?.thumbinails?.high?.url} />
//           <Typography variant={"subtitle2"} color={"gray"}>
//             {video?.snippet?.channelTitle}
//             <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
//           </Typography>
//         </Stack>
//       </>
//     ))
//   );
// };

// export default VideoCard;

import React from "react";
import { CheckCircle } from "@mui/icons-material";
import colors from "../constans/colors";
import {
  Avatar,
  CardContent,
  CardMedia,
  Card,
  Stack,
  Typography,
} from "@mui/material";
import moment from "moment";

const VideoCard = ({ video }) => {
  const imageUrl = "https://i.ytimg.com/vi/IeRt9k7FB_g/default.jpg";

  return (
    <Card sx={{ width: "320px", boxShadow: "none", borderRadius: 0 }}>
      {/* Rasmni to‘g‘ri ko‘rsatish uchun image qiymatini tekshirish */}
      {imageUrl && (
        <CardMedia
          component="img" // Media element uchun to'g'ri komponentni ko'rsatyapmiz
          image={imageUrl}
          alt={video?.snippet?.title}
          sx={{ width: "360px", height: "180px" }}
        />
      )}
      <CardContent
        sx={{
          background: colors.primary,
          height: "200px",
          position: "relative",
        }}
      >
        {/* Nashr etilgan vaqt */}
        <Typography my={"5x"} sx={{ opacity: ".3" }}>
          {video?.snippet?.publishedAt
            ? moment(video.snippet.publishedAt).fromNow()
            : "No date available"}
        </Typography>
        {/* Videoning sarlavhasi */}
        <Typography variant="subtitle1" fontWeight={"bold"}>
          {video?.snippet?.title?.slice(0, 50)}
        </Typography>
        {/* Videoning qisqa ta'rifi */}
        <Typography variant="subtitle2" sx={{ opacity: "0.6" }}>
          {video?.snippet?.description?.slice(0, 70)}
        </Typography>
        {/* Kanal ma'lumotlari */}
        <Stack
          direction={"row"}
          position={"absolute"}
          bottom={"10px"}
          alignItems={"center"}
          gap={"5px"}
        >
          <Avatar src={video?.snippet?.thumbnails?.high?.url} />
          <Typography variant={"subtitle2"} color={"gray"}>
            {video?.snippet?.channelTitle}
            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
