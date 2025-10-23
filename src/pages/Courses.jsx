import { useState } from "react";
import SearchBar from "../components/SearchBar";
import CourseList from "../components/CourseList";

function Courses() {
    const [searchTerm, setSearchTerm] = useState("");

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

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <section id="courses">
            <h2>Courses</h2>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <CourseList courses={filteredCourses} />
        </section>
    );
}

export default Courses;