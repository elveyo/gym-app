import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { exerciseState } from "../utils/ExerciseState";
import { Link } from "react-router-dom";
const ExerciseCard = ({ elem, type }) => {
  const exer = exerciseState.getState().exercise;
  const setExercise = () => {
    window.scrollTo(0, 0);
    exerciseState.setState({ exercise: elem });
  };
  return (
    <Box
      onClick={setExercise}
      sx={{
        width: { xs: "95%", sm: "48%", lg: "31%" },
        height: "auto",
        m: "20px 1%",
        p: "20px 10px",
        borderRadius: "10px",
        bgcolor: "white",
        boxShadow: "1px 1px 8px #100720",
        position: "relative",
        ":hover": {
          boxShadow: "1px 1px 8px  #C21010",
        },
      }}
    >
      <Link style={{ all: "unset" }} to={`/${elem.id}`}>
        <img
          src={elem.gifUrl}
          alt="exercise"
          width="100%"
          height="65%"
          loading="lazy"
        />
        <Typography
          sx={{
            fontSize: { xs: "19px", lg: "23px" },
            m: "15px 10px",
            textTransform: "capitalize",
            fontWeight: "600",
          }}
        >
          {elem.name}
        </Typography>
        <Stack
          width="70%"
          flexDirection="row"
          sx={{
            position: "absolute",
            bottom: "15px",
            fontFamily: "Anton, sans-serif",
            fontWeight: "300",
            letterSpacing: "1px",
            textTransform: "uppercase",
            fontSize: elem.target.length > 15 ? "12px" : "18px",
          }}
        >
          <div className="bodypart">{elem.bodyPart}</div>
          <div className="categoryCard">{elem.target}</div>
        </Stack>
      </Link>
    </Box>
  );
};

export default ExerciseCard;
