import React from 'react'
import Seta from '@/app/assets/setaDown.png'
import Image from 'next/image';

type Props = {
    name: string
}

export function ItemMenu({ name }: Props) {
    return (
        <button className='flex items-center gap-12 ml-9 '>
            <span className='text-white font-bold'>{name}</span>
        </button>
    )
}

export default ItemMenu