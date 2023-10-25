import React from 'react';
import Logo from '@/app/assets/logo.png'
import Image from 'next/image';
import ItemMenu from './ItemMenu';
import Search from './Search';
import Grid from './Grid';
import Link from 'next/link';


export function Header() {
    return (
        <header className=' flex items-center w-full h-20 bg-Primary-black'>
            <Grid>
                <title>Home</title>
                <div className='flex flex-1 items-center justify-between'>
                    <div className='flex items-center gap-14'>
                        <Link href="/">
                            <Image
                                src={Logo} alt="logo" className='w-40'
                            />
                        </Link>

                        <ul className='flex items-center gap-14 '>
                            <li className='border-b-2  '>
                                <Link href="/paraVoce">
                                    <ItemMenu name='Home'/>
                                </Link>
                            </li>
                            <li className='border-b-2  '>
                                <ItemMenu name='Cursos' />
                            </li>
                            <li className='border-b-2  '>
                                <ItemMenu name='Sobre' />
                            </li>
                            <li className='border-b-2 flex items-center '>
                                <Link href="/">
                                    <ItemMenu name='Sair' />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Search />
                    </div>
                </div>
            </Grid>
        </header>
    )
}

export default Header
