import Layout from "./Components/Layout.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Members from "./Pages/Members.jsx";
import Message from "./Pages/Message.jsx";
import Projects from "./Pages/Projects.jsx";
import Clients from "./Pages/Clients.jsx";
import Works from "./Pages/Works.jsx";
import Header from "./Components/Header/Header.jsx";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route path="/Dashboard/" element={<Home />} />
        <Route path="/Dashboard/members" element={<Members />} />
        <Route path="/messages" element={<Message />} />
        <Route path="/Dashboard/projects" element={<Projects />} />
        <Route path="/Dashboard/clients" element={<Clients />} />
        <Route path="/Dashboard/works" element={<Works />} />
        <Route path="/Dashboard/" element={<Works />} />
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
