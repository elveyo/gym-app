import React, { useState, forwardRef } from "react";
import ReactPaginate from "react-paginate";
import ExerciseCard from "./ExerciseCard";
import { Box, Typography, Pagination } from "@mui/material";

const Exercises = forwardRef(({ exercises, type }, ref) => {
  const itemsPerPage = 9;
  const [page, setPage] = useState(1);
  const start = page * itemsPerPage - itemsPerPage;
  const end = start + itemsPerPage;
  const currentExercises = exercises.slice(start, end);

  const handleChange = (event, value) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setPage(value);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        bgcolor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "#F6F6F6",
        mb: "50px",
      }}
      ref={ref}
    >
      {exercises.length > 0 && (
        <>
          <Typography
            align="center"
            sx={{ mt: "20px", fontSize: "30px", textTransform: "uppercase" }}
          >
            {type === "all" ? "Here are your exercises" : "Similar Exercises"}
          </Typography>

          <Box
            sx={{
              width: "90%",
              height: "auto",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              m: "30px 0",
              bgcolor: "transparent",
            }}
          >
            {currentExercises.map((elem) => (
              <ExerciseCard key={elem.id} elem={elem} type={type} />
            ))}
          </Box>
          {exercises.length > itemsPerPage && (
            <Pagination
              count={Math.ceil(exercises.length / itemsPerPage)}
              page={page}
              onChange={handleChange}
              variant="outlined"
              sx={{ m: " 20px 0" }}
            />
          )}
        </>
      )}
    </Box>
  );
});

export default Exercises;
