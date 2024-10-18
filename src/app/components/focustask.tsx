"use client"

import { useState, useEffect } from 'react';

function FocusTask(){
    const [milestone, setMilestone] = useState('');

    useEffect(() => {
        const storedMilestone = localStorage.getItem('milestone');
        if (storedMilestone) {
            setMilestone(storedMilestone);
        }
    }, []);

    const handleMilestoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMilestone(e.target.value);
        localStorage.setItem('milestone', e.target.value);
    };

    return(
        <div className="min-w-[300px] max-w-[300px] md:min-w-[500px] md:max-w-[500px] bg-pink rounded-lg flex flex-col gap-3 justify-center items-center shadow-lg py-4 px-5">
            <div>
                <p className="text-2xl font-bold">Milestone</p>
            </div>
            <div className="py-2">
                <input className='bg-inherit text-white placeholder-white w-full focus:outline-none text-center' placeholder="I'll be focusing on..." value={milestone} onChange={handleMilestoneChange}/>
            </div>
            
        </div>
    )
}

export default FocusTask; 