import React from 'react'
import Image from 'next/image'

const Topfooter = () => {
    return (
        <div className=' m-5 flex items-center justify-center'>
            <Image
                alt='top-footer'
                width={700}
                height={600}
                src='/footer/top footer.png'
            />


        </div>
    )
}

export default Topfooter