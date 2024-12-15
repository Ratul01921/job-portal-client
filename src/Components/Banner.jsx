import React from 'react';
import { motion } from "motion/react"
import { easeOut } from 'motion';
import team1 from '../assets/team1.jpg'
import team2 from '../assets/team2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 my-6 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1 py-10'>
                    <motion.img src={team1}
                    animate={{y: [50, 100, 50]}}
                    transition={{duration: 10, repeat: Infinity}}
                    alt="" className='mx-w-sm rounded-t-[40px] rounded-br-[40px] border-l-[6px] border-b-[6px] border-blue-400 shadow-2xl w-64' />
                    <motion.img src={team2}
                    animate={{x: [100, 150, 100]}}
                    transition={{duration: 10, delay:5, repeat: Infinity}}
                    alt="" className='mx-w-sm rounded-t-[40px] rounded-br-[40px] border-l-[6px] border-b-[6px] border-blue-400 shadow-2xl w-64' />
                </div>
                <div className='flex-1'>
                    <motion.h1 animate={{x: 50}} 
                    transition={{duration: 2, delay: 1, ease:easeOut, repeat: Infinity}}
                    className="text-5xl font-bold">Latest <motion.span animate={{color: ['#33f6ff', '#d133ff', '#74ff33']}}
                    transition={{duration: 2, delay:1, repeat: Infinity}}
                    >Job</motion.span> For You!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In delete eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;