import React, { useEffect, useState } from 'react';
import Story from './Story';
import image from '../Images/Image 1.png'

const Short = () => {
    const stories = [
        {
            id: 0,
            title: 'This text is for our article title, sometime it should be long as like this',

            coverImage: '../Images/Image 1.png',
            author: { name: 'Michael Scott', profileImage: '/images/author.png' },
            community: { name: 'Travel for explore' },
            hashtags: ['#Website', '#Design', '#Dev_Web', '#Adobe_Photoshop'],
            type: 'long',
            created: 'Aug 10, 2022 | 11:00 PM',
            readTime: '2 min',
        },

    ]


    return (

        <div class="card w-full white shadow-xl">
            <div class="card-body">
                <div className="mt-5 mx-5">
                    {
                        stories.map(item => <Story key={item.id} item={item} ></Story>)
                    }
                </div>

            </div>
        </div>







    );
};

export default Short;

