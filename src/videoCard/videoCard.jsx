// import React from "react";
// import { CheckCircle } from "@mui/icons-material";
// import colors from "../constans/colors";
// import {
//   Avatar,
//   CardContent,
//   CardMedia,
//   Card,
//   Stack,
//   Typography,
// } from "@mui/material";
// import moment from "moment";

// const VideoCard = ({ video }) => {
//   const imageUrl = video.snippet.thumbnails.default.url;

//   return (
//     <Card
//       sx={{
//         width: { xs: "100%", sm: "360px", md: "320px" },
//         boxShadow: "none",
//         borderRadius: 0,
//       }}
//     >
//       {/* Rasmni to‘g‘ri ko‘rsatish uchun image qiymatini tekshirish */}
//       {imageUrl && (
//         <CardMedia
//           component="img" // Media element uchun to'g'ri komponentni ko'rsatyapmiz
//           image={imageUrl}
//           alt={video?.snippet?.title}
//           sx={{
//             width: { xs: "100%", sm: "360px" },
//             height: "180px",
//           }}
//         />
//       )}
//       <CardContent
//         sx={{
//           background: "white",
//           height: "250px",
//           position: "relative",
//           textDecoration: "none",
//         }}
//       >
//         {/* Nashr etilgan vaqt */}
//         <Typography my={"5x"} sx={{ opacity: ".3" }}>
//           {video?.snippet?.publishedAt
//             ? moment(video.snippet.publishedAt).fromNow()
//             : "No date available"}
//         </Typography>
//         {/* Videoning sarlavhasi */}
//         <Typography
//           variant="subtitle1"
//           marginBottom={"9px"}
//           fontWeight={"bold"}
//           textDecoration={"none"}
//         >
//           {video?.snippet?.title?.slice(0, 50)}
//         </Typography>
//         {/* Videoning qisqa ta'rifi */}
//         <Typography variant="subtitle2" sx={{ opacity: "0.6" }}>
//           {video?.snippet?.description?.slice(0, 70)}
//         </Typography>
//         {/* Kanal ma'lumotlari */}
//         <Stack
//           direction={"row"}
//           position={"absolute"}
//           bottom={"10px"}
//           alignItems={"center"}
//           gap={"5px"}
//         >
//           <Avatar src={video?.snippet?.thumbnails?.high?.url} />
//           <Typography variant={"subtitle2"} color={"gray"}>
//             {video?.snippet?.channelTitle}
//             <CheckCircle
//               sx={{
//                 fontSize: "12px",
//                 color: "gray",
//                 ml: "5px",
//               }}
//             />
//           </Typography>
//         </Stack>
//       </CardContent>
//     </Card>
//   );
// };

// export default VideoCard;

// import React from "react";
// import { CheckCircle } from "@mui/icons-material";
// import {
//   Avatar,
//   CardContent,
//   CardMedia,
//   Card,
//   Stack,
//   Typography,
// } from "@mui/material";
// import moment from "moment";

// const VideoCard = ({ video }) => {
//   const imageUrl = video?.snippet?.thumbnails?.medium?.url || "/fallback.jpg";
//   const avatarUrl =
//     video?.snippet?.thumbnails?.high?.url || "/default-avatar.jpg";
//   const videoUrl = `https://www.youtube.com/watch?v=${video?.id?.videoId}`;

//   return (
//     <Card
//       sx={{
//         width: { xs: "100%", sm: "360px", md: "320px" },
//         boxShadow: "none",
//         borderRadius: 0,
//       }}
//     >
//       {imageUrl && (
//         <CardMedia
//           component="img"
//           image={imageUrl}
//           alt={video?.snippet?.title || "Video Thumbnail"}
//           sx={{
//             width: "100%",
//             height: "180px",
//           }}
//         />
//       )}
//       <CardContent
//         sx={{
//           background: "white",
//           height: "250px",
//           position: "relative",
//           textDecoration: "none !important", // CardContent ichidagi barcha elementlar uchun
//         }}
//       >
//         {/* Published Date */}
//         <Typography my={1} sx={{ opacity: 0.3 }}>
//           {video?.snippet?.publishedAt
//             ? moment(video.snippet.publishedAt).fromNow()
//             : "No date available"}
//         </Typography>

//         {/* Video Title */}
//         <Typography
//           variant="subtitle1"
//           fontWeight="bold"
//           component="a"
//           href={videoUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           sx={{
//             textDecoration: "none !important",
//             color: "inherit",
//             display: "block",
//             "&:hover": { textDecoration: "none" }, // Hoverda ham underline chiqmasligi uchun
//           }}
//         >
//           {video?.snippet?.title?.slice(0, 50) || "No title available"}
//         </Typography>

//         {/* Video Description */}
//         <Typography
//           variant="subtitle2"
//           sx={{
//             opacity: 0.6,
//             textDecoration: "none !important", // Descriptionda chiziq chiqmasligi uchun
//           }}
//         >
//           {video?.snippet?.description?.slice(0, 70) ||
//             "No description available"}
//         </Typography>

//         {/* Channel Info */}
//         <Stack
//           direction="row"
//           position="absolute"
//           bottom={10}
//           alignItems="center"
//           gap={1}
//         >
//           <Avatar src={avatarUrl} />
//           <Typography
//             variant="subtitle2"
//             color="gray"
//             sx={{
//               textDecoration: "none !important",
//             }}
//           >
//             {video?.snippet?.channelTitle || "Unknown Channel"}
//             <CheckCircle sx={{ fontSize: 12, color: "gray", ml: 1 }} />
//           </Typography>
//         </Stack>
//       </CardContent>
//     </Card>
//   );
// };

// export default VideoCard;

import React from "react";
import { CheckCircle } from "@mui/icons-material";
import {
  Avatar,
  CardContent,
  CardMedia,
  Card,
  Stack,
  Typography,
  GlobalStyles,
} from "@mui/material";
import moment from "moment";

const VideoCard = ({ video }) => {
  const imageUrl = video?.snippet?.thumbnails?.medium?.url || "/fallback.jpg";
  const avatarUrl =
    video?.snippet?.thumbnails?.high?.url || "/default-avatar.jpg";
  const videoUrl = `https://www.youtube.com/watch?v=${video?.id?.videoId}`;

  return (
    <>
      {/* Global CSS Reset (underline yo‘qolishi uchun) */}
      <GlobalStyles
        styles={{
          "a, a:visited, a:hover, a:active": {
            textDecoration: "none !important",
            color: "inherit",
          },
        }}
      />

      <Card
        sx={{
          width: { xs: "100%", sm: "360px", md: "320px" },
          boxShadow: "none",
          borderRadius: 0,
        }}
      >
        {imageUrl && (
          <CardMedia
            component="img"
            image={imageUrl}
            alt={video?.snippet?.title || "Video Thumbnail"}
            sx={{
              width: "100%",
              height: "180px",
            }}
          />
        )}
        <CardContent
          sx={{
            background: "white",
            height: "250px",
            position: "relative",
          }}
        >
          {/* Published Date */}
          <Typography my={1} sx={{ opacity: 0.3 }}>
            {video?.snippet?.publishedAt
              ? moment(video.snippet.publishedAt).fromNow()
              : "No date available"}
          </Typography>

          {/* Video Title */}
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            component="a"
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {video?.snippet?.title?.slice(0, 50) || "No title available"}
          </Typography>

          {/* Video Description */}
          <Typography variant="subtitle2" sx={{ opacity: 0.6 }}>
            {video?.snippet?.description?.slice(0, 70) ||
              "No description available"}
          </Typography>

          {/* Channel Info */}
          <Stack
            direction="row"
            position="absolute"
            bottom={10}
            alignItems="center"
            gap={1}
          >
            <Avatar src={avatarUrl} />
            <Typography variant="subtitle2" color="gray">
              {video?.snippet?.channelTitle || "Unknown Channel"}
              <CheckCircle sx={{ fontSize: 12, color: "gray", ml: 1 }} />
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default VideoCard;
