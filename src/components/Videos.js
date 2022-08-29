import React, { forwardRef } from "react";
import { Box, Typography, Stack } from "@mui/material";
import VideoCard from "./VideoCard.js";
const Videos = forwardRef(({ videos }, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "white",
      }}
    >
      <Typography
        align="center"
        sx={{
          mt: "30px",
          fontSize: "30px",
          textTransform: "uppercase",
        }}
      >
        Exercise Videos
      </Typography>
      <Box
        sx={{
          width: "90%",
          height: "auto",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          bgcolor: "white",
          justifyContent: "space-around",
          m: "50px 0",
          flexWrap: "wrap",
        }}
      >
        {videos.slice(1, 5).map((video) => (
          <VideoCard video={video.video} />
        ))}
      </Box>
    </Box>
  );
});

export default Videos;
