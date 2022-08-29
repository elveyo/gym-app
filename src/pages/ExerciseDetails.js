import React, { useEffect, useState, useRef } from "react";
import { exerciseState } from "../utils/ExerciseState";
import ExerciseOverview from "../components/ExerciseOverview";
import SimilarExercises from "../components/Exercises";
import Videos from "../components/Videos";
import { fetchData, youtubeSearchOptions } from "../utils/fetchData";
import { useNavigate } from "react-router-dom";
import { nativeSelectClasses } from "@mui/material";

const ExerciseDetails = () => {
  const navigate = useNavigate();
  const similarExRef = useRef(null);
  const videosRef = useRef(null);
  const [videos, setVideos] = useState([]);
  const { exercises, exercise } = exerciseState();
  // const filteredExercises = exercises.filter(
  //   (elem) => elem.name != exercise.name
  // );
  const startPoint =
    exercises.indexOf(exercise) == exercises.length - 1
      ? exercises.indexOf(exercise) - 3
      : exercises.indexOf(exercise) + 1;
  console.log(startPoint);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const fetchVideos = await fetchData(
          `https://youtube-search-and-download.p.rapidapi.com/search?query=${exercise.name} exercise`,
          youtubeSearchOptions
        );
        setVideos(fetchVideos.contents);
      } catch (err) {
        console.log(err);
      }
      if (Object.keys(exercise).length === 0) {
        navigate("/");
      }
    };
    fetchVideos();
  }, [exercise]);
  return (
    <>
      <ExerciseOverview similarExRef={similarExRef} videosRef={videosRef} />
      <SimilarExercises
        exercises={exercises.slice(startPoint, startPoint + 3)}
        type="similar"
        ref={similarExRef}
      />
      <Videos videos={videos} ref={videosRef} />
    </>
  );
};

export default ExerciseDetails;
