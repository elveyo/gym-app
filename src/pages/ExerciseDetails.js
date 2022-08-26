import React, { useEffect, useState } from "react";
import { exerciseState } from "../utils/ExerciseState";
import ExerciseOverview from "../components/ExerciseOverview";
import SimilarExercises from "../components/Exercises";
import Videos from "../components/Videos";
import { fetchData, youtubeSearchOptions } from "../utils/fetchData";
import { useNavigate } from "react-router-dom";

const ExerciseDetails = () => {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const { exercises, exercise } = exerciseState();
  const filteredExercises = exercises.filter(
    (elem) => elem.name != exercise.name
  );

  const exerciseIndex = exercises.indexOf(exercise);
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
      <ExerciseOverview />
      <SimilarExercises
        exercises={filteredExercises.slice(exerciseIndex, exerciseIndex + 3)}
        type="similar"
      />
      <Videos videos={videos} />
    </>
  );
};

export default ExerciseDetails;
