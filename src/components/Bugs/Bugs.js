import React, { useState } from 'react'
import BugShow from './BugShow'

const Bugs = (props) => {
  const [bugs] = useState(props.bugs)
  const header = ['Title', 'Description', 'Category', 'Deadline', 'Status']

  return (
    <div className='row'>
      <h5 className='mt-5 mx-5'>Bugs:</h5>

      <table className='table table-hover mx-5'>
        <thead className='table-secondary'>
          <tr>
            {header.map(name => <th scope='col'> {name} </th>)}
          </tr>
        </thead>

        <tbody>
          {bugs.map((bug) => {
            return (
              <BugShow bug={bug} />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Bugs
