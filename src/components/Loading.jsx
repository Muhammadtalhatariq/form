import React from 'react'
import { Button } from 'antd';


const Loading = () => {
    return (
        <>
            <Button disabled block >
               <span className='text-neutral-400'> disabled</span>
            </Button>
        </>
    )
}

export default Loading
