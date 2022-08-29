import React, { useState } from 'react'
import ProjectUserShow from './ProjectUserShow'

const ProjectUsers = (props) => {
  const [users] = useState(props.users)
  const header = ['ID', 'Name', 'Type', 'Email']

  return (
    <div className='row'>
      <h5 className='mt-5 mx-5'>Project Assigned To:</h5>

      <table className='table table-hover mx-5'>
        <thead className='table-secondary'>
          <tr>
            {header.map(name => <th scope='col'> {name} </th>)}
          </tr>
        </thead>

        <tbody>
          {users.map((user) => {
            return (
              <ProjectUserShow user={user} />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProjectUsers
