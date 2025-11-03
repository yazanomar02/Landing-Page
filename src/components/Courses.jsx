import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import FilterButtons from "./FilterButtons";
import "../index.css";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("/data/courses.json")
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);

  const filteredCourses =
    filter === "All" ? courses : courses.filter(course => course.category === filter);

  return (
    <section id="courses" className="courses-section">
      <h2 className="courses-title">Available Courses</h2>

      <FilterButtons currentFilter={filter} setFilter={setFilter} />

      <div className="courses-grid">
        {filteredCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}

export default Courses;