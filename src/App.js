// import logo from "./logo.svg";
// import "./App.css";
import { Route, Routes } from "react-router-dom";
// import Welcome from "./components/Welcome";
import HomePage from "./pages/Home";
import NewsPage from "./pages/News";
import ContactPage from "./pages/Contact";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import NoPage from "./components/NoPage";

const name = "say oh yeah!";
const user = {
   id: 1,
   name: "Khoa Gà",
};
const element1 = <h1>Hello Fen!!! {name}</h1>;
const element2 = <h1>{user.name} ăn đấm</h1>;

function App() {
   const names = ["Thit", "Ca", "Trung", "Sua"];
   return (
      <Routes>
         {/* <Route path="/" element={<HomePage />} /> */}
         {/* <Route path="/news" element={<NewsPage />} />
         <Route path="/contact" element={<ContactPage />} /> */}
         <Route path="/" element={<Layout />} />
         <Route path="/Home" element={<Home />} />
         <Route path="/Blogs" element={<Blogs />} />
         <Route path="/Contact" element={<Contact />} />
         <Route path="*" element={<NoPage />} />
      </Routes>
      // <div className="App">
      //    <nav>
      //       <ul>
      //          <li>
      //             <Link to="/">Home</Link>
      //          </li>
      //          <li>
      //             <Link to="/news">News</Link>
      //          </li>
      //          <li>
      //             <Link to="/contact">Contact</Link>
      //          </li>
      //       </ul>
      //    </nav>

      // </div>
      // <div>
      //    <ul>
      //       {names.map((name, index) => (
      //          <li key={index}>{name}</li>
      //       ))}
      //    </ul>
      // </div>
   );
}

export default App;
