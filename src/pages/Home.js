import React,{useState} from 'react'
import {Box} from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercise from '../components/SearchExercise';
import Exercises from '../components/Exercises';
import Contact from '../components/Contact';
const Home = () => {
const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  return (
    <Box>
      <HeroBanner/>
      <SearchExercise 
      setExercises={setExercises}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
       />
      <Exercises 
      setExercises={setExercises} 
      exercises={exercises}
       bodyPart={bodyPart}
      />
      <Contact/>
    </Box>
  )
}

export default Home