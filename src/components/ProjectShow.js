import React, { useState } from 'react'
import BugShow from './BugShow';

const ProjectShow = (props) =>{
   const[project] = useState(props.project)

   return(
      <div className="row">
        <h1 className='text-center mt-5'>{project.title}</h1><br/>
          <div className='col-md-3'/>

          <div className='col-md-6'>
            <p className='mx-5'><b>Description:</b> {project.description}</p>

            <h5 className='mx-5'>Project Assigned To:</h5>
            <table className='table table-hover mx-5'>
              <thead className='table-secondary'>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Type</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                {project.users.map((user) => {
                  return(
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.type}</td>
                      <td>{user.email}</td>
                    </tr>
                  )
                })}
                </tbody>
            </table>

            <BugShow bugs= {project.bugs} />
        </div>
    </div>
  );
}
export default ProjectShow;
