import { useState } from 'react';
import '../styles/input.css';

function EducationBanner({index, schools, setSchools, school, setSchool}) {

    const [active, setActive] = useState(false);
    const editUniversity = (e) => setSchool({...school, university: e.target.value});
    const editLocation = (e) => setSchool({...school, location: e.target.value});
    const editDegree = (e) => setSchool({...school, degree: e.target.value});
    const editStart = (e) => setSchool({...school, start: e.target.value});
    const editEnd = (e) => setSchool({...school, end: e.target.value});

  
    const deleteSchool = () => {
        setActive(false);
        setSchools(schools.filter((_,selectedIndex) => selectedIndex !== index));
    };

    const saveSchool = () => { 
        setActive(false);
    };

    return (
        <div className="EducationInput">
            <form>
                {active ? (
                    <>
                         <label>
                            <h3>School</h3>
                            <input
                                placeholder="Enter school/university"
                                value={school.university}
                                onChange={editUniversity}
                                required
                            />
                        </label>

                        <label>
                            <h3>Location</h3>
                            <input
                                placeholder="City, Country/State"
                                value={school.location}
                                onChange={editLocation}
                                required
                            />
                        </label>

                        <label>
                            <h3>Degree</h3>
                            <input
                                placeholder="Enter your degree"
                                value={school.degree}
                                onChange={editDegree}
                                required
                            />
                        </label>

                        <label>
                            <h3>Start Date</h3>
                            <input
                                placeholder="Enter start date"
                                value={school.start}
                                onChange={editStart}
                            />
                        </label>

                        <label>
                            <h3>End Date</h3>
                            <input
                                placeholder="Enter graduation date"
                                value={school.end}
                                onChange={editEnd}
                            />
                        </label>

                        <div className="buttons">
                            <button onClick={saveSchool}>Save</button>
                            <button onClick={deleteSchool}>Delete</button>
                        </div>
                    </>
                ) : (
                    <>
                        <label>
                            <h2 style={{cursor:'pointer'}}>{school.university}</h2>
                            <button onClick={() => setActive(true)}>Edit</button>
                        </label>
                    </>
                )}
            </form>
        </div>
    );
}

function EducationInput({schools, setSchools}) {
    const addSchool = () => {
        setSchools([...schools, {university: "University", degree: "Degree", location: "Location",  start: "Start", end: "End"}]);
    }

    /*
    index: The index of the selected school
    school: The new updated school to replace s
    Description: Function works by mapping over all the schools and if it finds the index they're looking for, they update s to school
    */
    const updateSchool = (index, school) => {
        setSchools(schools.map((s, i) => i == index ? school : s))
    }

    const schoolsList = schools.map( (school, index) => {
        return (
            <>
                <EducationBanner
                    key={index}
                    index={index}
                    schools={schools}
                    setSchools={setSchools}
                    school={school}
                    setSchool={(newSchool) => updateSchool(index, newSchool) }
                />
            </>
               )
    });

    return (
        <>
            <h2>Education</h2>
            <div className="schools">
                {schoolsList}
            </div>
            
            <button onClick={addSchool}>Add</button>

        </>
    );
}

export default EducationInput;