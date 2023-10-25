import IconSearch from '@/app/assets/search.png'
import Image from 'next/image';

export function Search(){

    return(
        <div className='flex items-center gap-4'>
            <Image src={IconSearch} alt='Search' className='w-5'/>
            <input type="text" className='bg-transparent outline-none text-white border-b-2 border-white w-28' placeholder='Buscar'/>
        </div>
    )
}//Desenvolvendo o style do input

export default Search;