import Layout from "./Components/Layout.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Members from "./Pages/Members.jsx";
import Message from "./Pages/Message.jsx";
import Projects from "./Pages/Projects.jsx";
import Clients from "./Pages/Clients.jsx";
import Works from "./Pages/Works.jsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/messages" element={<Message />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/works" element={<Works />} />
          <Route path="/" element={<Works />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
