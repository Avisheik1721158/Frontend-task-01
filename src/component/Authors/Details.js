import React from 'react';
import img3 from '../Images/Image 3.png'

const Details = (props) => {
    const { id, name, profileImage, bio, summary } = props.item
    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <div className='flex'>
                        <div><img src={img3} alt="" /></div>
                        <div className='text-white font-bold ml-5'>{name} <span className='text-slate-400'>{summary.stories} Stories</span>

                        </div>
                    </div>
                    <div>
                        <span className='text-slate-400 flex ml-10'>{bio}</span>
                    </div>
                </div>
                <div>
                    <div className='flex justify-around'>
                        <div><span className='text-slate-400 '>{summary.followers} Followers-01</span></div>
                        <div className='text-sky-400 ml-5  font-bold'>Follow</div>
                    </div>
                </div>

            </div>
            <div className='flex mt-5 justify-between'>
                <div>
                    <div className='flex'>
                        <div><img src={img3} alt="" /></div>
                        <div className='text-white font-bold ml-5'>{name} <span className='text-slate-400'>{summary.stories} Stories</span>

                        </div>
                    </div>
                    <div>
                        <span className='text-slate-400 flex ml-10'>{bio}</span>
                    </div>
                </div>
                <div>
                    <div className='flex justify-around'>
                        <div><span className='text-slate-400 '>{summary.followers} Followers</span></div>
                        <div className='text-sky-400 ml-5  font-bold'>Follow</div>
                    </div>
                </div>

            </div>
            <div className='flex mt-5 justify-between'>
                <div>
                    <div className='flex'>
                        <div><img src={img3} alt="" /></div>
                        <div className='text-white font-bold ml-5'>{name} <span className='text-slate-400'>{summary.stories} Stories</span>

                        </div>
                    </div>
                    <div>
                        <span className='text-slate-400 flex ml-10'>{bio}</span>
                    </div>
                </div>
                <div>
                    <div className='flex justify-around'>
                        <div><span className='text-slate-400 '>{summary.followers} Followers</span></div>
                        <div className='text-sky-400 ml-5  font-bold'>Follow</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Details;
