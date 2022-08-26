import React from 'react'
import { Link } from 'react-router-dom';

const  AllProjectsShow =(props)=>{
    return (
      <div className="row">
      {console.log(props.projects)}
        {props.projects.map((project) => {
          return(
            <div className="col-md-3" key={project.id}>
            <div className="card">
              <h3 className="card-header bg-black text-white text-center">{project.title}</h3>
              <div className='card-body text-center'>
                <Link to={`${project.id}`} state={project} >Show</Link>
              </div>
            </div>
          </div>
          )
        })}
        </div>
    );
  }
export default AllProjectsShow;
