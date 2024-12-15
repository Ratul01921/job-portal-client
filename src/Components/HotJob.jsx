import React, { useEffect, useState } from 'react';
import JobsCard from '../pages/JobsCard';

const HotJob = () => {
    const [jobs, setJobs ] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5555/jobs')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])

    return (
        <div className='w-11/12 mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    jobs.map(job => <JobsCard job={job} key={job._id}></JobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJob;