import './App.css';
// ↓ 라우터 로드
import { BrowserRouter as Router, Routes, Route } from "react-router";
import data from './data.json';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Details from './pages/portfolio_details';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        {/* 목록 출력, 상세 페이지 */}
        <Route path="/" element={<Home data={data} />} />
        <Route path="/about" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio data={data} />} />
        <Route path="/portfolio/:id" element={<Details data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
