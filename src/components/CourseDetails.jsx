import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import "../index.css";

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch("/data/courses.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((c) => c.id === parseInt(id));
        setCourse(selected);
      });
  }, [id]);

  if (!course)
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading course details...</p>
      </div>
    );

  return (
    <section className="course-details">
      <div className="details-container">
        <Link to="/courses" className="back-btn">
          <ArrowLeft size={18} /> Back to Courses
        </Link>

        <div className="image-container">
          <img src={course.image} alt={course.title} />
        </div>

        <div className="info-container">
          <h2>{course.title}</h2>
          <p className="level">
            <strong>Level:</strong> {course.level}
          </p>
          <p className="description">{course.description}</p>

          <div className="tags">
            <span className="tag category">{course.category}</span>
            <span className="tag level-tag">{course.level}</span>
          </div>

          <button className="enroll-btn">Enroll Now</button>
        </div>
      </div>
    </section>
  );
}

export default CourseDetails;
