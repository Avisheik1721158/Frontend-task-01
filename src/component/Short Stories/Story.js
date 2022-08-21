import React from 'react';
import img from '../Images/Image 1.png'
import img3 from '../Images/Image 3.png'

const Story = (props) => {
    const { id, title, community, author, created, readTime, hashtags, type } = props.item;
    return (
        <div className='container flex justify-between '>
            <div>
                <h1 className='font-bold  '>{title}</h1>
                <div className='flex justify-between font-bold '>
                    <div className='flex justify-around'>
                        <div><img className='mt-3 ml-5' src={img3} alt="" /></div>
                        <div className='mt-3 ml-3'>{author.name}</div>
                    </div>
                    <div className='mt-3 mx-8'>
                        {community.name}
                    </div>

                </div>
                <div className='text-slate-400 ml-5  flex justify-items-end'>
                    <div>
                        {created}
                    </div>
                    <div className='ml-2'>
                        {readTime} read
                    </div>
                    <div className='text-indigo-500 ml-5'>
                        {hashtags}
                    </div>
                </div>
            </div>
            <div>

                <img className={type} src={img} alt="" />

            </div>
        </div>


    );
};

export default Story;