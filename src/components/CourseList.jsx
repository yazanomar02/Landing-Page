import CourseCard from "./CourseCard";
import '../index.css';

function CourseList({ courses }) {
    if (courses.length === 0) {
        return <p style={{ color: "#888" }}>Not Found</p>;
    }

    return (
        <div className="course-list">
            {courses.map(course => (
                <CourseCard key={course.id}
                    title={course.title}
                    description={course.description}
                    level={course.level} />
            ))}
        </div>
    );
}

export default CourseList;