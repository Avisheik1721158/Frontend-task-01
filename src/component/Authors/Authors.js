import React from 'react';
import Details from './Details';

const Authors = () => {

    const users = [
        {
            name: 'Michael Scott',
            profileImage: '/images/author.png',
            bio: "Don't ever, for any reason, do anything to anyone for any reason ever, no matter what",
            summary: {
                stories: 39,
                followers: 1100,
            },
        }
    ]

    return (
        <div className='bg-black mt-5'>
            <span className='text-white font-bold flex ml-5 mt-10'>Amazing Authors to Follow</span>
        <span className='text-white font-bold flex ml-5 mt-10'>Testing</span
            <div class="card mt-5  w-full bg-slate-700 shadow-xl">
                <div class="card-body">
                    {
                        users.map(item => <Details key={item.id} item={item}></Details>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Authors;
