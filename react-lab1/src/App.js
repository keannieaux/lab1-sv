import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Courses from './Components/Courses/Courses';
import Reviews from './Components/Reviews/ReviewsComponent';
import NotFound from './Components/NotFound/notfound';

class App extends React.Component {
  render() {
    return (
      <Router>
                  <Header />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="*" element={<NotFound />} /> 
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
