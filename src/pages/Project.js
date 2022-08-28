import React from 'react'
import { useLocation } from 'react-router-dom'
import ProjectShow from '../components/ProjectShow'
const ProjectPage = () => {
  const location = useLocation()

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <ProjectShow project={location.state} />
        </div>
      </div>
    </>
  )
}

export default ProjectPage
