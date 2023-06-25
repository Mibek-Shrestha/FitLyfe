import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Box,Typography,Stack} from '@mui/material';
import {fetchData,exerciseOptions} from '../utilies/fetchData';
import Exercises from '../components/Exercises'

const ExerciseDetail = () => {
  return (
    <div>
      
      <Exercises/>

      </div>
  )
}

export default ExerciseDetail