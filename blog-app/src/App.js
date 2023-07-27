import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Blogs from "./Pages/Blogs/Blogs";
import CreateBlog from "./Pages/Create/CreateBlog";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blogs/:id" element={<Blogs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
