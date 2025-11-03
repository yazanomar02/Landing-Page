import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/Home";
import Courses from "./components/Courses";
import CourseDetails from './components/CourseDetails';



function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
       <Route path='course/:id' element={<CourseDetails/>}/> 
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
