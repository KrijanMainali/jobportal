import React from 'react'
import NavBar from './shared/NavBar'
import Job from './Job';
import Footer from './shared/Footer';
import { useSelector } from 'react-redux';

// const randomJobs = [1, 2, 3,4,5];

const Browse = () => {

    const {allJobs} = useSelector(store=>store.job)

    return (
        <div>
            <NavBar />
            <div className='max-w-7xl mx-auto my-10'>
                <h1 className='font-bold text-xl my-10'>Search Results ({allJobs.length})</h1>
                <div className='grid grid-cols-3 gap-4 '>
                    {
                        allJobs.map((job) => {
                            return (
                                <Job key={job._id} job={job}/>
                            )
                        })
                    }
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Browse