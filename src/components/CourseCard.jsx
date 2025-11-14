import { Link } from "react-router-dom";
import "../index.css";

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <div className="course-image">
        <img src={course.image} alt={course.title} />
        <span className="students-count">120</span>
      </div>

      <div className="course-content">
        <span className="date">1 - 28 July 2022</span>
        <h3>{course.title}</h3>
        <p>{course.description}</p>

        <div className="course-footer">
          <span className="level">$ 380 <del>150 $</del></span>
          <Link to={`/course/${course.id}`} className="details-btn">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
