import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  console.log(video);
  return (
    <Stack
      direction="column"
      height="300px"
      p="10px"
      sx={{
        width: { xs: "95%", sm: "49%", lg: "24%" },
        cursor: "pointer",
        ":hover": {
          opacity: "0.8",
          color: "#C21010",
        },
      }}
    >
      <a
        key={video.videoId}
        href={`https://www.youtube.com/watch?v=${video.videoId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          style={{ width: "100%", height: "60%" }}
          src={video.thumbnails[0].url}
        />
        <Typography
          sx={{
            mt: "20px",
            fontSize: "20px",
            textTransform: "capitalize",
            fontWeight: "600",
          }}
        >
          {video.title}
        </Typography>
      </a>
    </Stack>
  );
};

export default VideoCard;
