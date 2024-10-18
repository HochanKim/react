import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UseEffect01 from './component_1017/UseEffect01';
import UseMemo01 from './component_1017/UseMemo01';
import UseRef01 from './component_1017/UseRef01';

const App = () => {
  return (
    <>
      <Router>
        <div>
          <ul>
            <li><Link to="/useEffect">useEffect컴포넌트</Link></li>
            <li><Link to="/useMemo">useMemo컴포넌트</Link></li>
            <li><Link to="/useRef">useRef컴포넌트</Link></li>
          </ul>
        </div>
        <Routes>
          <Route path="/useEffect" element={<UseEffect01></UseEffect01>}></Route>
          <Route path="/useMemo" element={<UseMemo01></UseMemo01>}></Route>
          <Route path="/useRef" element={<UseRef01></UseRef01>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;