import React from 'react'
import { Button } from './ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    // DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Plus } from 'lucide-react'
import { createProject } from '@/actions/createProject'
import SubmitProjectButton from './submit-project-btn'

const NewProjectBtn = () => {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button className='rounded-full'>
                <Plus className='w-4 h-4 mr-1' /> Create Project
            </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px] rounded-md'>
            <DialogHeader>
                <DialogTitle>New Project</DialogTitle>
                <DialogDescription>
                    Create new project to get started
                </DialogDescription>
            </DialogHeader>
            <form className='flex gap-4 flex-col' action={createProject}>
                <div className='grid sm:grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor='name'>Name</Label>
                        <Input name='name' id='name' placeholder='Project Name' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor='url'>URL</Label>
                        <Input name='url' id='url' placeholder='https://example.com' />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='description'>Description</Label>
                    <Textarea name='description' id='description' placeholder='Description (optional)' />
                </div>
                <SubmitProjectButton />
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default NewProjectBtn