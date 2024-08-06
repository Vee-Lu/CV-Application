import { useState } from 'react';
function ExperienceBanner({index, experiences, setExperiences, experience, setExperience}) {

    const [active, setActive] = useState(false);
    const editCompany = (e) => setExperience({...experience, company:e.target.value});
    const editLocation = (e) => setExperience({...experience, location:e.target.value});
    const editPosition = (e) => setExperience({...experience, position:e.target.value});
    const editStart = (e) => setExperience({...experience, start:e.target.value});
    const editEnd = (e) => setExperience({...experience, end:e.target.value});
    const editDescription = (e) => setExperience({...experience, description:e.target.value});

    const deleteExperience = () => {
        setActive(false);
        setExperiences(experiences.filter((_,selectedIndex) => selectedIndex != index));
    }

    const saveExperience = () => {
        setActive(false);
    }

    return (
        <div className="ExperienceInput">
            <form>
                {active ? (
                    <>
                        <label>
                            <h3>Company</h3>
                            <input
                                placeholder="Enter company"
                                value={experience.company}
                                onChange={editCompany}
                                required
                            />
                        </label>

                        <label>
                            <h3>Location</h3>
                            <input
                                placeholder="Enter location"
                                value={experience.location}
                                onChange={editLocation}
                                required
                            />
                        </label>

                        <label>
                            <h3>Position</h3>
                            <input
                                value={experience.location}
                                onChange={editPosition}
                                required
                            />
                        </label>

                        <label>
                            <h3>Start Date</h3>
                            <input
                                placeholder="Enter start date"
                                value={experience.start}
                                onChange={editStart}
                            />
                        </label>

                        <label>
                            <h3>End Date</h3>
                            <input
                                placeholder="Enter graduation date"
                                value={experience.end}
                                onChange={editEnd}
                            />
                        </label>

                        <label>
                            <h3>Description</h3>
                            <textarea
                                placeholder="Enter description"
                                value={experience.description}
                                onChange={editDescription}
                            />
                        </label>

                        <div className="buttons">
                            <button onClick={saveExperience}>Save</button>
                            <button onClick={deleteExperience}>Delete</button>
                        </div>
                    </>
                ) : (
                    <>
                        <label>
                            <h2 style={{cursor:'pointer'}}>{experience.company}</h2>
                            <button onClick={() => setActive(true)}>Edit</button>
                        </label> 
                    </>
                )}
            </form>
        </div>
    );
}
 
function ExperienceInput({experiences, setExperiences}) {
    const addExperience = () => {
        setExperiences([...experiences, {company: "Company", position: "Position", location: "Location", start: "Start", end: "End", description: "Enter your description"}]);
    };

    const updateExperience = (index, experience) => {
        setExperiences(experiences.map((e, i) => i == index ? experience : e));
    };

    const experiencesList = experiences.map( (experience, index) => {
        return (
            <>
                <ExperienceBanner
                    key={index}
                    index={index}
                    experiences={experiences}
                    setExperiences={setExperiences}
                    experience={experience}
                    setExperience={(newExperience) => updateExperience(index, newExperience)}
                />
            </>
                )
    });

    return (
        <>
            <h2>Experience</h2>
            <div className="experiences">
                {experiencesList}
            </div>
            <button onClick={addExperience}>Add</button>
        </>
    );
}

export default ExperienceInput;