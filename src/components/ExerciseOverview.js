import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { exerciseState } from "../utils/ExerciseState";

const ExerciseOverview = () => {
  const { exercise } = exerciseState.getState();

  return (
    <Box width="100%" height="auto" bgcolor="white">
      <Stack
        width="100%"
        height="90%"
        sx={{
          alignItems: "center",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <img src={exercise.gifUrl} className="exercisePic" />
        <Stack
          m="30px 20px"
          height="30%"
          justifyContent="space-between"
          sx={{
            textAlign: { xs: "center", lg: "left" },
            alignItems: { xs: "center", lg: "flex-start" },
          }}
        >
          <Typography
            width="90%"
            fontSize="2.5rem"
            textTransform="capitalize"
            fontWeight="600"
            ml="10px"
          >
            {exercise.name}
          </Typography>
          <Typography
            width="90%"
            fontSize="1.5rem"
            fontWeight="500"
            m="50px 0 0 10px"
          >
            Excelent exercise for {exercise.bodyPart} to improve{" "}
            {exercise.target}.
          </Typography>
          <Typography
            width="90%"
            fontSize="1.5rem"
            fontWeight="500"
            m="10px 0 0 10px"
          >
            Check out similar exercises or videos to learn how to train
            properly.
          </Typography>
          <Stack
            width="70%"
            flexDirection="row"
            mt="50px"
            sx={{
              fontFamily: "Anton, sans-serif",
              fontWeight: "300",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            <div className="bodypart">Similar exercises</div>
            <div className="categoryCard">Videos</div>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ExerciseOverview;
