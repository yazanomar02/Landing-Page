import CourseCard from "./CourseCard";

function CoursesSection() {
    const courses = [
        { id: 1, title: 'Interface Design Basics', description: 'Learn how to build attractive interfaces.', level: 'Junior' },
        { id: 2, title: 'UX Research Advanced', description: 'Deeply understand your users needs.', level: 'Middle' },
        { id: 3, title: 'Motion UI', description: 'Bring your designs to life with movement.', level: 'Advanced' },
        { id: 4, title: 'Typography & Color Theory', description: 'Master the art of visual harmony and readability.', level: 'Junior' },
        { id: 5, title: 'Prototyping with Figma', description: 'Create interactive prototypes and design systems.', level: 'Middle' },
        { id: 6, title: 'Usability Testing', description: 'Evaluate user experience with effective testing methods.', level: 'Middle' },
        { id: 7, title: 'Responsive Design', description: 'Make your designs look perfect on any device.', level: 'Junior' },
        { id: 8, title: 'UI Animation Masterclass', description: 'Take your UI to the next level with advanced animations.', level: 'Advanced' },
    ];


    return (
        <section id="courses" className="courses">
            <h2>Courses</h2>
            <div className="courses-list">
                {courses.map(course => (
                    <CourseCard
                        key={course.id}
                        title={course.title}
                        description={course.description}
                        level={course.level}
                    />
                ))}
            </div>
        </section>
    );
}             

export default CoursesSection;