import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const LatestJobCards = ({job}) => {
    const navigate = useNavigate();
    return (
        <div onClick={()=> navigate(`/description/${job._id}`) }className='p-5 rounded-md shadow-xl border border-gray-100  cursor-pointer'>
            <div>
                <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                <p className="text-white dark:text-gray-100">Nepal</p>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className='text-gray-900 dark:text-gray-100'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className= "font-bold" variant="ghost">{job?.positions}Postions</Badge>
                <Badge className= "text-[#f83002] font-bold" variant="ghost">{job?.jobType}</Badge>
                <Badge className= "text-[#7209b7] font-bold" variant="ghost">{job?.salary}</Badge>
            </div>
        </div>
    )
}

export default LatestJobCards