import React from 'react'
import User from '../../assets/images/avatar-mark-webber.webp'

export const Notification = ({ img = User, user, post, action, time, neww, message, picture }) => {
    return (
        <section className={`${neww && 'bg-[#f7fafd]'} flex gap-2  py-2 px-3 rounded-md`}>
            <img src={img} alt="" className='w-10 h-10' />
            <div className='flex flex-col'>
                <p className='text-[12px] text-[#5e6778]'>
                    <span className='font-bold text-black pr-1 cursor-pointer hover:text-[#0a317b]'>
                        {user}
                    </span>
                    {action}
                    <span className={` cursor-pointer hover:text-[#0a317b] text-[#5e6778] font-bold pl-1`}>
                        {post}
                    </span>
                    <span className={`${neww ? 'inline-block' : 'hidden'} w-2 h-2 ml-1  bg-[#f65351] rounded-full`}></span>
                </p>
                <small className='text-[#5e6778] '>{time}</small>
                {
                    message &&
                    <div className='border py-2 pl-4 pr-5 mt-2 rounded-md  cursor-pointer hover:bg-[#e5effa] '>
                        <p className='text-[12px] text-[#5e6778]'>
                            Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and
                            I'm already having lots of fun and improving my game.
                        </p>
                    </div>
                }
            </div>
            
            {
                user === 'Kimberly Smith' &&
                <div className='flex-1'>
                    <img src={picture} alt="" className='w-8 h-8 float-right'/>
                </div>
            }
        </section>
    )
}
