import React from 'react';
import img3 from '../Images/Image 3.png'

const Story = (props) => {
    const { content, author, community } = props.item;
    return (
        <div>
            <div className='mt-5'>
                {content}



            </div>
            <div className='flex justify-between'>
                <div className='mt-4 flex '>
                    <div><img src={img3} alt="" /></div>
                    <div className='ml-4 font-bold'>{author.name}</div>
                </div>
                <div className='mt-4 font-bold'>{community.name}</div>
<div className='mt-4 font-bold'>{community.name}</div>
            </div>



            {/* <div className='flex justify-around'>
                <div className=''>
                    <div><img className='' src={img3} alt="" /></div>
                    <div className=''>{author.name}</div>
                </div>
                <div className='mt-3 mx-8'>
                    {community.name}
                </div>
            </div> */}
        </div>
    );
};

export default Story;
