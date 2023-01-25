import { 
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import NewBlog from "./components/pages/NewBlog";


function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/newblog" element={<NewBlog />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
