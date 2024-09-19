import Table from '@/components/table';
import { db } from '@/db';
import { projects as dbProjects } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { ChevronLeft, Globe } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const page = async ({params}: {params: {formProjectId: string}}) => {

    if (!params.formProjectId)  return (<div>Invalid Project Id</div>);
    const projects = await db.query.projects.findMany({ 
        where: (eq(dbProjects.id, parseInt(params.formProjectId))),
        with: {
            feedbacks: true
        } 
    });
    // console.log(JSON.stringify(projects));
    const project = projects[0];
    return (
        <div>
            {/* page {params.formProjectId} */}
            <div>
                <Link className='text-indigo-500 font-medium flex items-center mb-3' href='/projects'>
                    <ChevronLeft className='h-5 w-5 mr-1' /><span className='text-lg'>Back to Projects</span>
                </Link>
            </div>
            <div className='flex justify-between items-start'>
                <div className='proj-info'>
                    <h1 className='text-3xl font-bold mb-3'>{ projects[0].name }</h1>
                    <h2 className='text-primary-background text-xl mb-2'>{project.description || 'value'}</h2>
                </div>
                {
                    project.url ?
                    <Link className='underline text-indigo-500 font-medium flex items-center' href={project.url}>
                        <Globe className='h-5 w-5 mr-1' /><span className='text-lg'>Visit Site</span>
                    </Link> : null
                }
            </div>
            <div>
                <Table data={project.feedbacks} />
            </div>
        </div>
    )
}

export default page 