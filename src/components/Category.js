import React, { useState, useRef } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { fetchData } from "../utils/fetchData";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { exerciseState } from "../utils/ExerciseState";
import { exercisesSearchOptions } from "../utils/fetchData";
const Category = ({ bodyParts, exercisesRef }) => {
  const arrowsStyle = {
    width: "50px",
    height: "50px",
    cursor: "pointer",
    display: { xs: "none", md: "block" },
    pointerEvents: { md: "none", lg: "auto" },
  };
  const refreshExercises = exerciseState((state) => state.refreshExercises);
  const scrollbar = useRef(null);
  const fetchCategory = async (bodyPart) => {
    try {
      const exercises = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
        exercisesSearchOptions
      );
      setTimeout(
        () => exercisesRef.current.scrollIntoView({ behavior: "smooth" }),
        100
      );

      refreshExercises(exercises);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Stack
      width="100%"
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <ArrowBackIosIcon
        sx={arrowsStyle}
        onClick={() => (scrollbar.current.scrollLeft -= window.innerWidth / 2)}
      />

      <Box
        sx={{
          m: "100px 0",
          width: "80%",
          height: "auto",
          position: "relative",
          display: "flex",
          p: "0 0 15px 0",
          alignItems: "center",
          flexDirection: { md: "row", xs: "column" },
          overflowX: { xs: "none", sm: "auto" },
        }}
        className="category"
        ref={scrollbar}
      >
        {bodyParts.map((elem, i) => {
          return (
            <Stack
              key={i}
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{
                minWidth: "140px",
                height: "140px",
                cursor: "pointer",
                position: "relative",
                p: "15px",
                borderRadius: "50%",
                border: "2px solid black",
                m: "30px 50px",
                boxShadow: "1px 1px 8px #100720",
                textTransform: "uppercase",
                letterSpacing: "3px",

                ":hover": {
                  border: "1px solid #911F27",
                  boxShadow: "1px 1px 8px  #C21010",
                  color: "#C21010",
                  h5: {
                    display: "block",
                  },
                  img: {
                    opacity: "0.1",
                  },
                },
              }}
              onClick={(e) => fetchCategory(elem)}
            >
              <img
                src={require(`../assets/${elem}.png`)}
                style={{ width: "90%", height: "90%" }}
              ></img>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "100%",
                  position: "absolute",
                  bottom: { xs: "-30px", lg: "auto" },
                  display: { xs: "block", lg: "none" },
                }}
                display="block"
                align="center"
                fontWeight="600"
              >
                {elem}
              </Typography>
            </Stack>
          );
        })}
      </Box>

      <ArrowForwardIosIcon
        sx={arrowsStyle}
        onClick={() => (scrollbar.current.scrollLeft += window.innerWidth / 2)}
      />
    </Stack>
  );
};

export default Category;
