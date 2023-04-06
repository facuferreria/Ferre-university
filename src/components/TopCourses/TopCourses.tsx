import courses from '../../courses.json';
import CourseList from '../CourseList/CourseList';

type categoryType = {
    type: string
}

function TopCourses({type}: categoryType) {
    const filteredTopCourses = courses.filter(item => item?.type.includes(type))

    return (
        <div>
            <CourseList courses={filteredTopCourses} />
        </div>
    )
}

export default TopCourses