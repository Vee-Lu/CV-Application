
function Education({schools}) {
    const schoolsList = schools.map( (school, index) => {
        return (
                <div key={index}>

                    <div className="Left">
                        {school.university}
                        <div className="SchoolInfo">
                            {school.degree}, {school.location}
                        </div>
                    </div>

                    <div className="Right">
                        {school.start} - {school.end}
                    </div>

                </div>
            )    
    });
    
    return(
        <>
            <h2>Education</h2>
             {schoolsList}
        </>
    )
}

export default Education;