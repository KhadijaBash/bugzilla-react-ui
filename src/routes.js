import { Routes, Route } from 'react-router-dom'
import AllProjects from './pages/AllProjects'
import Project from './pages/Project'
import SignIn from './pages/SignIn'

const routes = (
  <Routes>
    <Route path='/projects' element={<AllProjects />} />
    <Route path='/projects/:id' element={<Project />} />
    <Route exact path='/' element={<SignIn />} />
  </Routes>
)

export default routes
