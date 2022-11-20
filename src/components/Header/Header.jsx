import React from 'react'

export const Header = () => {
    return (
        <nav>
            <ul className='flex justify-between items-center'>
                <ul className='flex items-center gap-2'>
                    <li className='text-lg font-bold'>Notifications</li>
                    <span className='px-2  rounded-md bg-[#0a317b] text-white font-bold'>3</span>
                </ul>
                <li className='text-[#5e6778] text-sm cursor-pointer hover:text-[#0a317b]'>Mark all as read</li>
            </ul>
        </nav>
    )
}
