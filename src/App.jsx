import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";
import CourseDetails from './pages/CourseDetails';
import { AppProvider } from './context/AppContext';
import Login from './pages/Login';
import ProtectedRoute from './routes/ProtectedRoute';
import SignUp from './pages/SignUp';

function App() {
  return (
    <AppProvider>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/course/:id' element={<ProtectedRoute><CourseDetails /></ProtectedRoute>} />
      </Routes>

      <Footer />
    </AppProvider>
  );
}

export default App;