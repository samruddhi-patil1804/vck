import './styles/Pages.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPages from './pages/CoursesPage';
import ContactPage from './pages/Contact';
import AdmissionPage from './pages/AdmissionPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/courses" element={<CoursesPages/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/admission" element={<AdmissionPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;