import React, { useState, forwardRef } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import Category from "./Category";
import { fetchData } from "../utils/fetchData";
import { exerciseState } from "../utils/ExerciseState";
import { exercisesSearchOptions } from "../utils/fetchData";
const Categories = forwardRef(({ setExercises, exercisesRef }, ref) => {
  const refreshExercises = exerciseState((state) => state.refreshExercises);
  const bodyParts = [
    "back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist",
  ];
  const [search, setSearch] = useState("");
  const exercisesRequest = async (name) => {
    let exercises;
    try {
      exercises = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/name/${name}`,
        exercisesSearchOptions
      );
      if (exercises.length === 0) {
        exercises = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/target/${name}`,
          exercisesSearchOptions
        );
      }
      setTimeout(
        () => exercisesRef.current.scrollIntoView({ behavior: "smooth" }),
        100
      );
      refreshExercises(exercises);
    } catch (err) {
      console.log(err);
    }
    refreshExercises(exercises);
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        alignItems: "center",
        position: "relative",
        flexDirection: "column",
        bgcolor: "white",
      }}
      ref={ref}
    >
      <Typography
        variant="h5"
        mt="50px"
        sx={{ fontSize: { xs: "20px", lg: "25px", xl: "30px" } }}
      >
        SEARCH EXERCISES
      </Typography>
      <Stack
        direction="row"
        width="100%"
        height="50px"
        mt="30px"
        justifyContent="center"
      >
        <input
          type="text"
          placeholder="e.g. biceps"
          className="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          sx={{
            width: "5%",
            bgcolor: "#100720",
            color: "white",
            borderRadius: "0",
            fontSize: "80%",
            ":hover": {
              bgcolor: "black",
            },
          }}
          onClick={() => exercisesRequest(search)}
        >
          Search
        </Button>
      </Stack>
      <Typography
        variant="h5"
        mt="80px"
        sx={{ fontSize: { xs: "20px", lg: "25px", xl: "30px" } }}
      >
        OR CHOOSE CATEGORY
      </Typography>
      <Category
        bodyParts={bodyParts}
        setExercises={setExercises}
        exercisesRef={exercisesRef}
      />
    </Box>
  );
});

export default Categories;
