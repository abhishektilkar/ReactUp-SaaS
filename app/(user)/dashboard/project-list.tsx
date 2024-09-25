'use client';

import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { projects } from '@/db/schema'
import { InferSelectModel } from 'drizzle-orm'
import Link from 'next/link';
import React from 'react'

type Project = InferSelectModel<typeof projects>;
type Props = {
    projects: Project[]
};

const ProjectsList = (props: Props) => {
  return (
    <div>
        {/* ProjectsList */}
        
        <ul className='grid grid-cols-1 md:grid-cols-3 mt-5 p-2 gap-4'>
            {props.projects.map((project) => (
                <li key={project.id}>
                    {/* {project.name || 'Sample'} */}
                    <Card className='max-w-[350px] flex flex-col m-1'>
                        <CardHeader className='flex-1'>
                            <CardTitle>{project.name || 'Sample Name'}</CardTitle>
                            <CardDescription>{project.description || 'Description'}</CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Link href={`/projects/${project.id}`}>
                                <Button>
                                    View Project
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card> 
                </li>
                )
            )}
        </ul>

    </div>
  )
}

export default ProjectsList