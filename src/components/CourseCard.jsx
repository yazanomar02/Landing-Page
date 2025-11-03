import { Link } from "react-router-dom";
import "../index.css";

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <div className="course-image">
        <img src={course.image} alt={course.title} />
      </div>

      <div className="course-content">
        <h3>{course.title}</h3>
        <p>{course.description}</p>

        <div className="course-footer">
          <span className="level">{course.level}</span>
          <Link to={`/course/${course.id}`} className="details-btn">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
