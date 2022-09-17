import React from 'react'
import Cv from '../../assets/cv.pdf'
const CTA = () => {
    return (
        <div className='cta'>
            <a href={Cv} download className='btn'>Dowload CV</a>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA