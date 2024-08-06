import PersonalInput from "./components/PersonalInput"
import EducationInput from './components/EducationInput'
import ExperienceInput from './components/ExperienceInput'

function Left({info, setInfo, schools, setSchools, experiences, setExperiences}) {
    return (
        <>
            <PersonalInput info={info} setInfo={setInfo}/>
        </>
            )
}