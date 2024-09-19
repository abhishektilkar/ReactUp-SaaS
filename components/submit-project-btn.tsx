'use client'
import React from 'react'
import { Button } from './ui/button';
import { useFormStatus } from 'react-dom';
import { Loader2 } from 'lucide-react';

const SubmitProjectButton = () => {
    const { pending } = useFormStatus();
  return (
    <Button type='submit'>{pending ? 
    <>
        <Loader2 className='h-4 w-4 mr-1' /> Creating ...
    </>: 'Create Project'}</Button>
  )
}

export default SubmitProjectButton;