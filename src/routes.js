import {BrowserRouter, Routes,Route} from 'react-router-dom'
import AllProjects from "./pages/AllProjects";
import Project from "./pages/Project";
import SignIn from "./pages/SignIn";

const routes = (
<BrowserRouter>
  <Routes>
    <Route exact path="/" element={<SignIn />} />
    <Route exact path="/projects" element={<AllProjects />} />
    <Route path="/projects/:id" element={<Project />} />
  </Routes>
</BrowserRouter>
);

export default routes
