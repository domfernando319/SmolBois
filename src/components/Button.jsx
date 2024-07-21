import React from 'react'

export default function Button(props) {

    const {text, func} = props
    return (
        <button onClick={func} className='px-8 mx-auto py-4 rounded-md bg-teal-950 border-solid border-teal-300 border-[2px] greenShadow duration-200'>
            <p className='text-teal-100 font-medium'>{text}</p>
        </button>
    )
}
