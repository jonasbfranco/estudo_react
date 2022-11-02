import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//PAginas
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
//Layouts
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


function App() {
  return (
    <Router>
      <Navbar />
        <Container customClass="min-height">
          <Routes>
            <Route path="/"           element={<Home />}>       </Route>
            <Route path="/projects"   element={<Projects />}>   </Route>
            <Route path="/company"    element={<Company />}>    </Route>
            <Route path="/contact"    element={<Contact />}>    </Route>
            <Route path="/newproject" element={<NewProject />}> </Route>
          </Routes>
        </Container>
      <Footer />
    </Router>
  );
}

export default App;
