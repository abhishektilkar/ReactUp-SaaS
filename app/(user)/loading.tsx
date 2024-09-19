import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const Loading = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 mt-16 gap-4'>
        {[1,2,3,4,5,6].map((i) => (
          <SkeletonComponent key={i}/>
        ))}
    </div>
  )
}

const SkeletonComponent = () => {
  return (
    <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
  )
}

export default Loading