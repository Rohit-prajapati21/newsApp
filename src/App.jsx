import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/header/Header";
import Home from "./pages/Home/Home";
import Headlines from "./pages/headlines/Headlines";
import Notes from "./pages/Notes/Notes";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="app">
      {/* <BrowserRouter> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<Headlines />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />


        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
