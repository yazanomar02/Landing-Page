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
import UserManagement from './pages/userManagement/UserManagement';
import { useEffect } from "react";


function App() {
  // حجب كل من الهدر والفوتر من صفحة اليوزرز 
  const hiddenRoutes = ["/users"];
  const hideLayout = hiddenRoutes.includes(location.pathname);

  useEffect(() => {
    hideLayout ? document.body.classList.add("no-header") : document.body.classList.remove("no-header");
  }, [hideLayout]);

  return (
    <AppProvider >
      {!hideLayout && <Header />}

      <main className={hideLayout ? "no-header" : ""}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/course/:id' element={<ProtectedRoute><CourseDetails /></ProtectedRoute>} />
          <Route path="/users" element={<UserManagement />} />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </AppProvider>
  );
}

export default App;