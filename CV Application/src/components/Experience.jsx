import { useState } from 'react';

function Experience({experiences}) {
    const experiencesList = experiences.map((experience, index) => {
        return (
            <div key={index}>

                <div className="left">
                    {experience.company}  
                    <div className="companyLocation">
                        {experience.position}, {experience.location}
                    </div>
                </div>

                <div className="right">
                    {experience.start} - {experience.end}
                    <div className="companyInfo">
                        {experience.description}
                    </div>
                </div>

            </div>
            )
    });

    return (
        <>
            <h2>Experience</h2>
             {experiencesList}
        </>
    )
}

export default Experience