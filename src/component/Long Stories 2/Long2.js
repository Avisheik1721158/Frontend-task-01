import React from 'react';

import Story from './Story';


const Long2 = () => {
    const stories = [
        {
            content:
                'Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while delivering proper impact. Our journey began on the 7th September of 2010. Mumshad Nahiyan, Raiyaan Abdullah, Rusab Sarmun and Raiann Rahman Shuvro, a group of boys casually sitting in their classroom decided to embark on a journey to establish a tech company. We initially thought of selling Game CDs. Then we realized our team needed a logo which lead us towards learning Adobe Photoshop and we Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while needed a logo which lead us towards learning Adobe Photoshop and we Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while needed a logo which lead us towards learning Adobe Photoshop and we Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while delivering proper impact.',
            coverImage: '/images/cover.jpg',
            author: { name: 'Michael Scott', profileImage: '/images/author.png' },
            community: { name: 'Travel for explore' },
            type: 'short',
            created: 'Aug 13, 2022 | 11:00 PM',
            readTime: '5 min',
        }
    ]
    return (
        <div className='mt-5'>
            <div className='container mx-auto  mt-5'>

                <div className=''>
                    {
                        stories.map(item => <Story key={item.id} item={item} ></Story>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Long2;