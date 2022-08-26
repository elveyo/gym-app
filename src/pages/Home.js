import React, { useState, useRef, useEffect } from "react";
import FrontPage from "../components/FrontPage";
import Categories from "../components/Categories";
import { fetchData } from "../utils/fetchData";
import Exercises from "../components/Exercises";
import { exerciseState } from "../utils/ExerciseState";
const Home = () => {
  const exercises = exerciseState((state) => state.exercises);
  const exercisesRef = useRef(null);
  const categoryRef = useRef(null);

  return (
    <>
      <FrontPage categoryRef={categoryRef} />
      <Categories exercisesRef={exercisesRef} ref={categoryRef} />
      <Exercises exercises={exercises} type="all" ref={exercisesRef} />
    </>
  );
};

export default Home;
