import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return "Loading...";

  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Watch{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0px" } }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            style={{ textDecoration: "none" }}
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography
                variant="h5"
                sx={{ fontSize: { lg: "28px", xs: "18px" } }}
                fontWeight={600}
                color="#000"
              >
                {item.video.title}
              </Typography>
              <Typography
                style={{ textOverflow: "ellipsis", overflow: "hidden" }}
                variant="h6"
                color="#000"
              >
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
