import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Exams from './pages/Exams';
// import Tests from './pages/Tests';
// import Login from './pages/Auth/Login';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navbar at the top */}
        <Navbar />
        
        {/* Main content area */}
        <main className="flex-grow p-4">
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/tests" element={<Tests />} />
            <Route path="/login" element={<Login />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;