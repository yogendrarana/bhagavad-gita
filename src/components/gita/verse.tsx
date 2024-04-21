import React from 'react'

type PropType = {
    text: String
}

const Verse: React.FC<PropType> = ({ text }) => {
    return (
        <div className='text-2xl font-medium'>{text}</div>
    )
}

export default Verse;