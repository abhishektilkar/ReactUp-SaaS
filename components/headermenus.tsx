'use client';

import React, { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    // DropdownMenuLabel,
    // DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { CreditCard, Folder, Menu, X } from 'lucide-react'
import { Button } from './ui/button';
import Link from 'next/link';
  

const HeaderMenus = () => {
    const [open, setOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setOpen(prevOpen => !prevOpen)
    };

  return (
    <DropdownMenu open={open} onOpenChange={toggleMenu}>
        <DropdownMenuTrigger asChild>
            <Button onClick={toggleMenu} className='mr-4' variant='secondary'>
                {/* Open */}
                {
                    open ?
                    <X className='h-6 w-6'/> :
                    <Menu className='h-6 w-6' />
                }
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56'>
            <DropdownMenuItem asChild>
                <Link href='/dashboard' className='flex items-center'>
                    <Folder className='h-4 w-4 mr-2'/> <span>Projects</span>
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
                <Link href='/billings' className='flex items-center'>
                    <CreditCard className='h-4 w-4 mr-2' />
                    Billing
                </Link>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default HeaderMenus