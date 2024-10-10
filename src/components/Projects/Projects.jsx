import React from 'react'
import ProjectsCard from './ProjectsCard'

const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className=' py-12 px8 flex flex-wrap gap-5'>
            < ProjectsCard 
                tital=" Blogging Website" main="This is a Blogging website Created in Next JS and used some component library"
            />
            < ProjectsCard 
                tital=" Youtube Clone" main="This is a Blogging website Created in Next JS and used some component library"
            />
            < ProjectsCard 
                tital=" Netflix Clone" main="This is a Blogging website Created in Next JS and used some component library"
            />

        </div>
    </div>
  )
}

export default Projects