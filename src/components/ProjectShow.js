import React, { useState } from 'react'
import Bugs from './Bugs/Bugs'
import ProjectUsers from './ProjectUsers/ProjectUsers'

const ProjectShow = (props) => {
  const [project] = useState(props.project)

  return (
    <div className='row'>
      <h1 className='text-center mt-5'>{project.title}</h1><br />
      <div className='col-md-3' />
      <div className='col-md-6'>
        <p className='mx-5'><b>Description:</b> {project.description}</p>

        <ProjectUsers users={project.users} />
        <Bugs bugs={project.bugs} />
      </div>
    </div>
  )
}

export default ProjectShow
