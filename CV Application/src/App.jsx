
import { useState } from 'react';

import PersonalInput from "./components/PersonalInput"
import Personal from "./components/Personal"

import Education from './components/Education'
import EducationInput from './components/EducationInput'

import Experience from './components/Experience'
import ExperienceInput from './components/ExperienceInput'



function App() {
  var [info, setInfo] = useState({
    name: "Full Name",
    email: "email@address",
    number: "123456789",
    address: "Address"

  });

  var [schools, setSchools] = useState( [
    {
      university: "Harvard University",
      degree: "Psychology",
      location: "Cambridge, MA",
      start: "2020",
      end: "2024"
    }
  ] );

  var [experiences, setExperiences] = useState( [
    {
      company: "McDonalds",
      position: "Fry Cook",
      location: "Holmen, WI",
      start: "2021",
      end: "2024",
      description: "Flipped and grilled burgers while also dealing with customers"
    }
  ] );
  //<Personal info={info}/>

  //<Education schools={schools}/>
  //<EducationInput schools={schools} setSchools={setSchools}/>

  //<Experience experiences={experiences} setExperiences={setExperiences}/>
  //<ExperienceInput experiences={experiences} setExperiences={setExperiences}/>
  return (
    <>
      <PersonalInput info={info} setInfo={setInfo}/>
    </>
  )
}

export default App
