import React, { useEffect, useState } from 'react'
import Projects from '../components/AllProjectsShow'
import { getAllProjects } from '../api/project'

const AllProjects = () => {
  const [projects, setProjects] = useState(null)
  const allProjects = async () => {
    const project = await getAllProjects()
    setProjects(project.data)
  }
  useEffect(
    () => {
      allProjects()
    }, []
  )

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='title'>
          <h2 className='text-center mt-5 mb-5'>Projects</h2>
        </div>
      </div>
      {projects ? <Projects projects={projects} /> : <p>Waiting for products to fetch</p>}
    </div>
  )
}

export default AllProjects
