import NewProjectBtn from '@/components/new-project'
import React from 'react'
import { db } from '@/db'
import { projects } from '@/db/schema'
import { auth, currentUser } from '@clerk/nextjs/server'
import { eq } from 'drizzle-orm'
import ProjectsList from './project-list'

const page = async () => {
  const { userId } = auth();
  if (!userId) return null;
  
  const allUserProjects = await db.select().from(projects).where(eq(projects.userId, userId));


  return (
    <div>
      <div className='flex items-center justify-center gap-3'>
        <h1 className='text-3xl font-bold text-center my-4'>Your Projects</h1>
        <NewProjectBtn />
      </div>
      <ProjectsList projects={allUserProjects} />
    </div>
  )
}

export default page