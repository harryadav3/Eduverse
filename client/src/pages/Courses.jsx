import { useContext, useEffect } from "react"
import { CourseContext } from "../context/CourseContext"


function Courses() {
    const courseContext = useContext(CourseContext);


    useEffect( () => {
        console.log("inside effect");
        courseContext.dispatch({
            type: 'courses',
            payload: []
        })
    },[])
    return (
        <div>
            Courses
        </div>
    )
}

export default Courses
