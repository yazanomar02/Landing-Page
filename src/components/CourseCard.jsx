import '../index.css';

function CourseCard({title, description, level}) {
    return (
        <div className="course-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <span className="level">{level}</span>
        </div>
    );
}

export default CourseCard;