import React from 'react'
import { Link } from 'react-router-dom'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { LogOut, User2 } from 'lucide-react'
import { useSelector } from 'react-redux'
import store from '@/redux/store'

const NavBar = () => {
   
    const { user } = useSelector(store => store.auth);

    return (
        <div className='bg-white'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                <div>
                    <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Mitra</span></h1>
                </div>
                <div className='flex items-center gap-12'>
                    <ul className='flex font-medium items-center gap-5'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/jobs">Jobs</Link></li>
                        <li><Link to="/browse">Browse</Link></li>
                    </ul>
                    {
                        !user ? (
                            <div className='flex items-center gap-2'>
                                <Link to="/login"><Button variant='outline'>Login</Button></Link>
                                <Link to="/signup"><Button className='bg-[#683ac2] hover:bg-[#301070]'>Signup</Button></Link>

                            </div>

                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className='cursor-pointer'>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                    </Avatar>

                                </PopoverTrigger>
                                <PopoverContent className="w-80">
                                    <div className=''>
                                        <div className='flex gap-2 space-y-2'>
                                            <Avatar className='cursor-pointer'>
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                            </Avatar>
                                            <div>
                                                <h4 className='font-medium'>Chandra Ojha</h4>
                                                <p className='text-sm text-muted-foreground'>MERN stack developer</p>

                                            </div>
                                        </div>
                                        <div className='flex flex-col my-2 text-gray-600'>
                                            <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                <User2 />
                                                <Button variant="link"><Link to="/profile">View Profile</Link></Button>
                                            </div>
                                            <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                <LogOut />
                                                <Button variant="link">Logout</Button>
                                            </div>
                                        </div>
                                    </div>

                                </PopoverContent>
                            </Popover>

                        )
                    }


                </div>

            </div>

        </div>
    )
}

export default NavBar