import './App.css';
import { Routes, Route } from "react-router-dom";

// import pages
import Home from './pages/Home';
import KnowledgeCenter from './pages/KnowledgeCenter';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import ResearchDevelopment from './pages/ResearchDevelopment';
import Login from './pages/auth/Login';
import Register from './pages/auth/SignUp';
import Reset from './pages/auth/Reset';
import PasswordRequest from './pages/auth/PasswordRequest';
import Upload from './pages/Upload';
import  PaperSubmision  from './pages/PaperSubmision';
import Form from './pages/Form';
import Resources from './pages/Resources';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Blog from './pages/Blog';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/knowledge-center' element={<KnowledgeCenter />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/research-development' element={<ResearchDevelopment/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/reset' element={<Reset />}/>
        <Route path='/request' element={<PasswordRequest />}/>
        <Route path='/upload' element={<Upload />}/>
        <Route path='/paper-submission' element={<PaperSubmision />}/>
        <Route path='/form' element={<Form />}/>
        <Route path='/resources' element={<Resources />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/events' element={<Events />}/>
        <Route path='/blog' element={<Blog />}/>
      </Routes>
    </div>
  );
}

export default App;
