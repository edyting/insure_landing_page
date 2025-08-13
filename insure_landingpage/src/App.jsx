import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import About from "./components/About";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import More from "./components/More";
import Navbar from "./components/Navbar";

// Optional 404 page
function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen text-2xl font-bold">
      404 - Page Not Found
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <About />
              <More />
              <Footer />
            </>
          }
        />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Catch-all Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
