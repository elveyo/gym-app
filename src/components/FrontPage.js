import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import Bucica from "../assets/bucica.png";
import Ghost from "../assets/ghost.png";

export const FrontPage = ({ categoryRef }) => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#F6F6F6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box display="flex" width="100%" justifyContent="space-around">
          <Stack
            direction="column"
            sx={{
              height: { xs: "100vh", lg: "auto" },
              alignItems: { xs: "center", lg: "flex-start" },
              textAlign: { xs: "center", lg: "initial" },
              m: { xs: "0 0 50px 0", lg: "0 0 0 50px" },
              justifyContent: { xs: "center" },
            }}
            ml="50px"
          >
            <img src={Ghost} className="logo" alt="logo"></img>
            <Typography
              variant="h3"
              fontFamily="Anton, sans-serif"
              mb="50px"
              sx={{ fontSize: { xs: "2rem", sm: "2.5rem", lg: "3.5rem" } }}
            >
              Over 1000 exercises in one
              <br /> place
            </Typography>
            <Typography
              variant="h4"
              mt="50px"
              sx={{ fontSize: { xs: "1.5rem", sm: "2rem", lg: "2.2rem" } }}
            >
              Search, train and become master!
            </Typography>
            <button
              onClick={() =>
                categoryRef.current.scrollIntoView({ behavior: "smooth" })
              }
              className="explore-exercises"
            >
              Explore exercises
            </button>
          </Stack>
          <img src={Bucica} className="trainer" alt="trainer"></img>
        </Box>
      </Box>
    </div>
  );
};

export default FrontPage;
