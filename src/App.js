import React from "react";                       
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./com/Navbar";
import Gallery from "./pages/Gallery";
import GuestBook from "./pages/GuestBook";
import ScrollText from "./pages/ScrollText";

// BrowserRouter는 새로고침이 안돼(에러남)서 hashbrowser를 쓸 수 있는데
// hashbrowser은 중간에 #이 껴짐 그래서 새로고침이 안되게 막음
// 뒤로가기 앞으로 가기가 안됨됨

function App() {
  return (
    <Router baseName="/test4">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/guestBook" element={<GuestBook />} />
          <Route path="/scrollText" element={<ScrollText />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
