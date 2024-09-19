'use client';

import { Clipboard } from 'lucide-react'
import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  

const CopyButton = ({text} : { text: string }) => {

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to Clipboard');
    })
  }

  return (
    // <div>CopyButton</div>
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
                <button
                  onClick={() => copyToClipboard(text)}
                  className='text-slate-50 absolute right-0 p-2 top-0'>
                    <Clipboard />
                </button>
            </TooltipTrigger>
            <TooltipContent className='m-2'>
                <p className='m-2'>Copy</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
    
  )
}

export default CopyButton