import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
import { Button } from './ui/button';

const PageHeader = () => {
    return(
        <header className='sticky insert-x-0 top-0 z-30 w-full transition-all'>
            {/* PageHeader */}
            <div className='w-full max-w-screen-xl px-2.5 lg:px-20 relative mx-auto border-b'>
                <div className='flex h-14 items-center justify-between'>
                {/* mr-4 pr-2 m-4 p-2 */}
                    <Link href={'/'} >
                        <Logo className=''/>
                    </Link>
                    {/* <h1>ReactUp</h1> */}
                    <div className=''>
                        <SignedOut>
                            <SignInButton>
                                <Button className='mr-2'>Sign in</Button>
                            </SignInButton>
                            <SignUpButton>
                                <Button>Sign up</Button>
                            </SignUpButton>
                        </SignedOut>
                        <SignedIn>
                            <HeaderMenus />
                            <UserButton />
                        </SignedIn>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default PageHeader;

import React from 'react';
import Link from 'next/link';
import HeaderMenus from './headermenus';

const Logo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="36" viewBox="0 0 250 60">
      <text x="10" y="40" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold">
        <tspan fill="#4A90E2">React</tspan>
        <tspan fill="#50E3C2">Up</tspan>
      </text>
    </svg>
  );  

// export default Logo;
