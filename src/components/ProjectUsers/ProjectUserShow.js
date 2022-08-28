import React, { useState } from 'react'

const ProjectUserShow = (props) => {
  const [user] = useState(props.user)

  return (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.type}</td>
      <td>{user.email}</td>
    </tr>
  )
}

export default ProjectUserShow
