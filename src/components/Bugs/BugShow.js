import React, { useState } from 'react'

const BugShow = (props) => {
  const [bug] = useState(props.bug)

  return (
    <tr key={bug.id}>
      <td>{bug.title}</td>
      <td>{bug.description}</td>
      <td>{bug.category}</td>
      <td>{bug.deadline}</td>
      <td>{bug.status}</td>
    </tr>
  )
}

export default BugShow
