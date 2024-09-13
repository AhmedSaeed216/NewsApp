

import React from 'react'
// import download from '../assets/download.jpg'

// const linkopen()
const NewsDetail = ({ altImg, description, title, src, url }) => {
    return (
        <div className=' '>

            {/* <div> */}

                <img src={src ? src : altImg} alt={title} />
                <h1 className='font-bold text-2xl hover:underline cursor-pointer mt-2' onClick={()=>{window.open(url)}}>{title}</h1>
                <p className='text-xs mt-1'>{description}</p>
                {/* <a href={url} target='_blank' rel='noopener noreferrer' className='text-blue-500 mt-2'>
                    Read More...
                </a> */}

            {/* </div> */}
        </div>

    )
}

export default NewsDetail
