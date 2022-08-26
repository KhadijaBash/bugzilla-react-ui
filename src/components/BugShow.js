import React, { useState } from 'react'

const BugShow = (props) =>{
   const[bugs] = useState(props.bugs)

   return(
      <div className="row">
            <h5 className='mt-5 mx-5'>Bugs:</h5>

            <table className='table table-hover mx-5'>
              <thead className='table-secondary'>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Category</th>
                  <th scope="col">Deadline</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {bugs.map((bug) => {
                return(
                      <tr key={bug.id}>
                        <td>{bug.title}</td>
                        <td>{bug.description}</td>
                        <td>{bug.category}</td>
                        <td>{bug.deadline}</td>
                        <td>{bug.status}</td>
                      </tr>
                    )
                  })}
                </tbody>
            </table>
        </div>
  );
}
export default BugShow;
