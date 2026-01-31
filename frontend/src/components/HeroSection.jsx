import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className='px-4 mx-auto rounded-full bg-gray-100 text-[#f83002] font-medium'>
                    Nepal’s #1 Career Platform
                </span>
                <h1 className='text-5xl font-bold'>
                    Find, Apply & <br />
                    Land Your <span className='text-[#6a38c2]'>Perfect Job</span>
                </h1>

                <p>Find verified jobs, apply instantly, and get matched with opportunities that fit your skills.</p>
                <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 m-auto '>
                    <input
                        type="text"
                        placeholder='Find Your Dream Jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full'
                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6a38c2]">
                        <Search className='h-5 w-5' />
                    </Button>


                </div>
            </div>


        </div>
    )
}

export default HeroSection