import { useContext, useEffect } from "react"
import { CourseContext } from "../context/CourseContext"
import data from './../data/courses'
import Course from "../components/Course";

function Courses() {


    console.log(data);
    const courseContext = useContext(CourseContext);


    // useEffect( () => {
    //     console.log("inside effect");
    //     courseContext.dispatch({
    //         type: 'courses',
    //         payload: []
    //     })
    // },[])

    return (
        <div className="courses">
        {console.log(data)}
        {data.map((item,id) => <Course title={item.title} 
        instructor={item.instructor} price={item.price} imageLink={item.imageLink} rating={item.rating} duration={item.duration} key={id}/>)}
        </div>
    )
}

export default Courses
