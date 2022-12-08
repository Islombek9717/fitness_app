import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { exerciseOptions, fetchData } from '../utils/fetchData';



const ExerciseDetail = () => {
  return (
    <Box>
      <Detail />
      <ExerciseViseos />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail
